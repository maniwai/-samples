const SellingPartnerAPI = require("amazon-sp-api");

let sellingPartner = new SellingPartnerAPI({
  region: "na", // The region to use for the SP-API endpoints ("eu", "na" or "fe")
  refresh_token:
    "Atzr|IwEBIEQvpigkU5V73lE9uVWjn9ICy2WAUsSxdpLpGF2pqx9gJM-7bM__v8c7KKAeHizbJaCxVL8NLPuXDP_cOnacp0N35yzwjiimhnkaYsV5M_K-NPwlD-6BGzKLmwegrSXNXdM4-ptFE_xLlnjkmFhuSg1K_S6dES5ahIQa_7znIT19aPd4hXtupRGYPApq3laovhuoIRt0a4xeVJ31gyaZUW7cE3xMsTATmVgd-BeJTcsslsKJYwOGYK-6KY0IpaYiah-8Pd4or-nwNECxF0DguXDk-MearDDGgatO7o4r02n0QA", // The refresh token of your app user
  credentials: {
    SELLING_PARTNER_APP_CLIENT_ID:
      "amzn1.application-oa2-client.1bc401b445064f0bbbefb44a5057eb8d",
    SELLING_PARTNER_APP_CLIENT_SECRET:
      "09c5694be68eb5752c51625d06e6d756b956928f93b439b26b78cbcd7bc42784",
    AWS_ACCESS_KEY_ID: "AKIAJVNMZLKYJOXWOJOQ",
    AWS_SECRET_ACCESS_KEY: "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",
    AWS_SELLING_PARTNER_ROLE:
      "arn:aws:iam::564866036676:role/_SellingPartnerAPIRole",
  }
});
const test = async () => {
  try {
    await sellingPartner.refreshAccessToken();
    const res = await sellingPartner.refreshRoleCredentials();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

test()