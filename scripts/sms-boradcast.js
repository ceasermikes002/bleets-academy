const fs = require("fs");
const csv = require("csv-parser");
const twilio = require("twilio");

// ✅ Replace with your actual Twilio credentials
const accountSid = 'TWILIO_ACCOUNT_SID';
const authToken = 'TWILIO_AUTH_TOKEN';
const twilioPhoneNumber = 'YOUR_TWILIO_PHONE_NUMBER';

const client = new twilio(accountSid, authToken);

// ✅ Edit this message to advertise your product
const messageBody = "🔥 Introducing Bleets Academy! Learn Frontend, Backend, and Fullstack development with top tutors! Reply to this message or call 0810 262 4144 to register.";

const sendSMS = async (phone) => {
  try {
    const result = await client.messages.create({
      body: messageBody,
      from: twilioPhoneNumber,
      to: phone.startsWith("+") ? phone : `+234${phone.replace(/\D/g, '').slice(-10)}`
    });
    console.log(`✅ Message sent to ${phone}: SID ${result.sid}`);
  } catch (error) {
    console.error(`❌ Failed to send to ${phone}: ${error.message}`);
  }
};

fs.createReadStream("contacts.csv") // Your CSV file name
  .pipe(csv())
  .on("data", (row) => {
    const phone = row["Phone 1 - Value"];
    if (phone) sendSMS(phone.trim());
  })
  .on("end", () => {
    console.log("📨 All messages processed.");
  });
