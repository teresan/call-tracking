# Call Tracking

Use of **Twilio** to track calls and send events to **Google Analytics** using Measurement Protocol.

## Setup 

### Function

This function will simply send a follow up SMS after call tracking metrics are collected.

* Create a Twilio Function and copy and paste the contents of [functions/index.js](functions/index.js) to the newly created function. Save and deploy your function. [https://www.twilio.com/docs/runtime/functions#getting-started-with-serverless-and-twilio-functions] (https://www.twilio.com/docs/runtime/functions#getting-started-with-serverless-and-twilio-functions)

* Update the values of **body** and **from** in your function code.

### Studio flow

* Create a new Studio flow in your Twilio account:
[https://www.twilio.com/console/studio/dashboard](https://www.twilio.com/console/studio/dashboard)

* Provide a name and select the option **Import from JSON** and copy and paste the contents of the file in [studio/flow.json](studio/flow.json)

* Once your flow is created, replace the info below:

    * Widget CampaignInfo: update  the variable **Campaign** with a relevant campaign identifier;

    * Widget CampaingInfo: update the variable **TrackingId** with your Tracking ID / Property ID from Google Analytics;

    * Widget ForwardCall: update with the phone number you would like to forward the call to;

    * Widget CreateEventTracking: update the request URL with any relevant data for your campaign. [https://developers.google.com/analytics/devguides/collection/protocol/v1/devguide#event](https://developers.google.com/analytics/devguides/collection/protocol/v1/devguide#event).

    * Widget SendFollowUp: update **Service** and **Function URL** with the function you just created.

* Save and publish your flow.

* Select a phone number in your Twilio Console and update the setting for **A call comes in** pointing to the Studio flow you've just created. 

