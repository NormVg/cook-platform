import { db, waitListUser } from "~/db/index";
import { eq } from 'drizzle-orm';

export default defineEventHandler(async (event) => {
  try {

    const body = await readBody(event);
    const {sendMail} = useNodeMailer()


    if (!body || !body.email || !body.type) {
      return {
        statusCode: 400,
        message: "Invalid request. 'email' and 'type' are required fields.",
      };
    }

    //  intermediate , advance ,  beginner

    const validTypes = ["intermediate", "advance", "beginner"];

    if (!validTypes.includes(body.type)) {
      return {
        statusCode: 400,
        message: "Invalid 'type'. Allowed values are 'intermediate', 'advance', or 'beginner'.",
      };
    }

    const newEntry = {
      "id": `cook_waitlist_${crypto.randomUUID()}${new Date().toISOString()}`,
      "email": body.email,
      "type":body.type,
      "datetime": new Date().toISOString(),
    };

    const user = await db.query.waitListUser.findFirst({
      where: eq(waitListUser.email, body.email)
    })

    const html = `

    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Welcome to Cook — TheAlphaOnes</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin: 0; padding: 0; font-family: 'Segoe UI', sans-serif; background-color: #f9f9f9; color: #1a1a1a;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.05); overflow: hidden;">
      <tr>
        <td style="padding: 32px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px; color: #18171C;">👋 Welcome to Cook</h1>
          <p style="margin-top: 8px; font-size: 16px; color: #555;">By <strong>TheAlphaOnes</strong></p>
        </td>
      </tr>
      <tr>
        <td style="padding: 0 32px 24px 32px;">
          <p style="font-size: 16px; line-height: 1.5; margin: 0 0 16px;">
            You're officially on the waitlist for <strong>Cook</strong> — our upcoming tool designed to simplify the way you plan, explore, and experience food and lifestyle.
          </p>
          <p style="font-size: 16px; line-height: 1.5; margin: 0 0 16px;">
            Built under <strong>TheAlphaOnes</strong>, Cook is part of our mission to create meaningful tools that people actually use — blending design, AI, and utility in one smooth experience.
          </p>
          <p style="font-size: 16px; line-height: 1.5; margin: 0 0 24px;">
            We’ll keep you updated with early access and sneak peeks. In the meantime, feel free to follow our journey or say hello.
          </p>
          <div style="text-align: center; margin: 32px 0;">
            <a href="https://taohq.org" style="background-color: #18171C; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-size: 16px;">
              Visit TheAlphaOnes
            </a>
          </div>
          <p style="font-size: 14px; color: #999; text-align: center;">
            Thanks for being part of the journey.
            <br />
            — Team TheAlphaOnes
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>


    `


    if (!user) {
      await db.insert(waitListUser).values(newEntry);

      const emailBody = {
        to: body.email,
        subject: 'Cook Waitlist Confirmed — TheAlphaOnes Has You Locked In 🔒',
        html:html
      };

      await sendMail(emailBody)



      return newEntry;
    } else {
      return {
      statusCode: 409,
      message: "User with this email already exists.",
      };
    }




  } catch (error) {
    return error;
  }
});
