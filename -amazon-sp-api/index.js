const SellingPartnerAPI = require("amazon-sp-api");

(async () => {
  try {
    let sellingPartner = new SellingPartnerAPI({
      region: "na", // The region to use for the SP-API endpoints ("eu", "na" or "fe")
      refresh_token:
        "Atzr|IwEBIEQvpigkU5V73lE9uVWjn9ICy2WAUsSxdpLpGF2pqx9gJM-7bM__v8c7KKAeHizbJaCxVL8NLPuXDP_cOnacp0N35yzwjiimhnkaYsV5M_K-NPwlD-6BGzKLmwegrSXNXdM4-ptFE_xLlnjkmFhuSg1K_S6dES5ahIQa_7znIT19aPd4hXtupRGYPApq3laovhuoIRt0a4xeVJ31gyaZUW7cE3xMsTATmVgd-BeJTcsslsKJYwOGYK-6KY0IpaYiah-8Pd4or-nwNECxF0DguXDk-MearDDGgatO7o4r02n0QA", // The refresh token of your app user
   });
    let res = await sellingPartner.callAPI({
      operation: "getMarketplaceParticipations",
      endpoint: "sellers",
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
})();
