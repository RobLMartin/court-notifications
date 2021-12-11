const twilio = require('twilio');
const { knex } = require('./util/db');

const { logger } = require('./util/logger');
 
const twilioErrorCodes = {
  '30003': 'Unreachable destination handset',
  '30004': 'Message blocked',
  '30005': 'Unknown destination handset',
  '30006': 'Landline or unreachable carrier',
  '30008': 'Unknown error'
};

async function twilioSendStatusWebhook(req, res) {
  const failedStatus = ['delivery_unknown', 'undelivered', 'failed'];
  // Make sure this is from Twilio
  const twilioSignature = req.headers['x-twilio-signature'];
  const params = req.body;
  const url = process.env.TWILIO_SEND_STATUS_WEBHOOK_URL;
  const isValid = twilio.validateRequest(
    process.env.TWILIO_AUTH_TOKEN,
    twilioSignature,
    url,
    params
  );
  if (!isValid) {
    logger.error('sendStatusWebhook: invalid incoming request - not from Twilio');
    return res.status(401).send('Unauthorized');
  }
  const status = params['SmsStatus'];
  let phone = params['To'];
  if (phone.startsWith('+1')) {
    phone = phone.substring(2);
  }
  logger.debug('sendStatusWebhook: incoming with status ' + status);
  try {
    if (status === 'delivered') {
      await knex('subscribers')
      .where(
        knex.raw("PGP_SYM_DECRYPT(encrypted_phone::bytea, ?) = ?", [process.env.DB_CRYPTO_SECRET, phone])
      )
      .update({ status: 'confirmed'});
    }
    else if (failedStatus.includes(status)) {
      subscribers = await knex('subscribers')
      .where(
        knex.raw("PGP_SYM_DECRYPT(encrypted_phone::bytea, ?) = ?", [process.env.DB_CRYPTO_SECRET, phone])
      )
      .update({ status: 'failed'});
      logger.error('Failed subscription - error code ' + params['ErrorCode']);
    }
    else {
      // Nothing - just an interim status
    }
  } 
  catch (e) {
    logger.error('Error updating status in subscriptionStatusWebhook: ' + e);
  }
  return res.status(200).send('OK');
}
 
module.exports = {
  twilioSendStatusWebhook
}
 