import { NextResponse } from "next/server";

const AWS = require("aws-sdk");
require("dotenv").config();
require("aws-sdk/lib/maintenance_mode_message").suppress = true;

const SES_CONFIG = {
  accessKeyId: "AKIA2PL4QHOOGCKBMP6F",
  secretAccessKey: "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",
  region: "ca-central-1",
};

const AWS_SES = new AWS.SES(SES_CONFIG);

export const sendEmail = async (email: string, name: string) => {
  let params = {
    Source: "480airlines@gmail.com",
    Destination: {
      ToAddresses: [email],
    },
    ReplyToAddresses: [],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<html><body><h1>Hi ${name},</h1><p>Thank you for joining 480Airlines. We are excited to have you as a member. We will be sending you emails about our latest deals and promotions. If you have any questions, please contact us at
                <a href="mailto:480airlines@gmail.com">
                480airlines@gmail.com
                </a>
                </p></body></html>`,
        },
        Text: {
          Charset: "UTF-8",
          Data: `Hi ${name}, Thank you for joining 480Airlines. We are excited to have you as a member. We will be sending you emails about our latest deals and promotions. If you have any questions, please contact us at 480airlines@gmail.com`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `Welcome to 480Airlines, ${name}!`,
      },
    },
  };
  try {
    const res = await AWS_SES.sendEmail(params).promise();
    console.log("Email sent successfully", res);
    return res;
  } catch (error) {
    console.log("Error sending email", error);
    return NextResponse.error();
  }
};

export const signupMonthlyEmail = async (email: string, name: string) => {
  let params = {
    Source: "480airlines@gmail.com",
    Destination: {
      ToAddresses: [email],
    },
    ReplyToAddresses: [],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<html><body><h1>Hi ${name},</h1><p>Thank you for signing up for our monthly newsletter. We will be sending you emails about our latest deals and promotions. If you have any questions, please contact us at
                <a href="mailto:480airlines@gmail.com">
                480airlines@gmail.com
                </a>
                </p></body></html>`,
        },
        Text: {
          Charset: "UTF-8",
          Data: `Hi ${name}, Thank you for signing up for our monthly newsletter. We will be sending you emails about our latest deals and promotions. If you have any questions, please contact us at 480airlines@gmail.com`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `480Airlines Monthly Newsletter, ${name}!`,
      },
    },
  };
  try {
    const res = await AWS_SES.sendEmail(params).promise();
    console.log("Email sent successfully", res);
    return res;
  } catch (error) {
    console.log("Error sending email", error);
    return NextResponse.error();
  }
};

export const signupCompanionTicketEmail = async (
  email: string,
  name: string
) => {
  let params = {
    Source: "480airlines@gmail.com",
    Destination: {
      ToAddresses: [email],
    },
    ReplyToAddresses: [],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<html><body><h1>Hi ${name},</h1><p>Thank you for signing up. You get our free companion ticket!. You can apply it to your next flight. If you have any questions, please contact us at
                <a href="mailto:
                480airlines@gmail.com">
                480airlines@gmail.com
                </a>
                </p></body></html>`,
        },
        Text: {
          Charset: "UTF-8",
          Data: `Hi ${name}, Thank you for signing up for our companion ticket. You can apply it to your next flight. If you have any questions, please contact us at 480airlines@gmailcom"`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `480Airlines -- Companion Ticket Promotion, ${name}!`,
      },
    },
  };
  try {
    const res = await AWS_SES.sendEmail(params).promise();
    console.log("Email sent successfully", res);
    return res;
  } catch (error) {
    console.log("Error sending email", error);
    return NextResponse.error();
  }
};

export const ticketPurchaseEmail = async (
  email: string,
  name: string,
  ticket: string,
  flightID: number,
  seatCode: string,
  plane: number,
  insurance: number,
  seatType: string,
  aircraftID: number
) => {
  const textContent = `Hi ${name},

Thank you for purchasing a ticket. Here are the details of your booking:

Email: ${email}
Name: ${name}
Ticket Number: ${ticket}
Flight ID: ${flightID}
Seat Code: ${seatCode}
Plane: ${plane}
Insurance: ${insurance}
Seat Type: ${seatType}
Aircraft ID: ${aircraftID}

If you have any questions, please contact us at 480airlines@gmail.com.`;
  let params = {
    Source: "480airlines@gmail.com",
    Destination: {
      ToAddresses: [email],
    },
    ReplyToAddresses: [],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<html><body><h1>Hi ${name},</h1><p>Thank you for purchasing a ticket. Here are the details of your booking:<br />
            <strong>Email:</strong> ${email}<br />
            <strong>Name:</strong> ${name}<br />
            <strong>Ticket Number:</strong> ${ticket}<br />
            <strong>Flight ID:</strong> ${flightID}<br />
            <strong>Seat Code:</strong> ${seatCode}<br />
            <strong>Plane:</strong> ${plane}<br />
            <strong>Insurance:</strong> ${insurance}<br />
            <strong>Seat Type:</strong> ${seatType}<br />
            <strong>Aircraft ID:</strong> ${aircraftID}<br /></p></body></html>`,
        },
        Text: {
          Charset: "UTF-8",
          Data: textContent,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `Booking Confirmation - 480airlines`,
      },
    },
  };
  try {
    const res = await AWS_SES.sendEmail(params).promise();
    console.log("Email sent successfully", res);
    return res;
  } catch (error) {
    console.log("Error sending email", error);
    return NextResponse.error();
  }
};
