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
