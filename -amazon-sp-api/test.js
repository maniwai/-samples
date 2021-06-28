const https = require("https");
const aws4 = require("aws4");
const AWS = require("aws-sdk");

new AWS.STS().assumeRole(
  {
    RoleArn: "arn:aws:iam::564866036676:role/_SellingPartnerAPIRole", // One created in the guide during IAM step
    RoleSessionName: "_SellingPartnerAPIRole",
  },
  function (err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
  }
);

/*
Successful response has this body
Credentials: {
    AccessKeyId: 'ASIA2.....',
    SecretAccessKey: 'GYarqdtY5......',
    SessionToken: 'FwoGZXIvYXdzEGMaDJZNgsGIkPg9CsIFcSKqAXztT9zQ...........',
    Expiration: 2020-10-23T02:22:58.000Z
  }

I use the data above to fill my next call
*/

function requestTest(opts) {
  https
    .request(opts, function (res) {
      res.pipe(process.stdout);
    })
    .end(opts.body || "");
}

function makeTestCall() {
  const ss = aws4.sign(
    {
      host: "sellingpartnerapi-na.amazon.com",
      method: "GET",
      path: "/orders/v0/orders?MarketplaceIds=ATVPDKIKX0DER&CreatedAfter=2020-05-10",
      region: "us-east-1",
      service: "execute-api",
      headers: {
        "User-Agent": "Fiscalpop/2.0 (Language=JavaScript; Platform=Ubuntu/16)",
        "x-amz-access-token":
          "Atza|IwEBIObmsjqIMdmeYDxdF-iA8979Mf0umKiaiOyL9yd6oQBWmPEkT9tZ9YAl3eA39FRkWOxS_1IENwi8Ni-5uxBPGxLlJ8OKsYYhqAKriK3pFVCuQanLXFuBTcrKBxFhD0ilxufrCQm0F7UwoBIUxFptEf0n3zx-KIXbumCEQDc0Q7yca4Rpv1WpE9PxKwrO2cup-V4IPax-mEUnTjMOLnVgc-6ChryyMHvb63zcGlBr_VQ2I-IgEm-UMTTvt9t-HIbKRL68Hk7WAqoZ42pBlvULHEfbWwbV2ZWaUu_n_zb8uh1QUGBdPsGxsxsHnV58dYf3f9zs3BNO3BbUpOssYF91qPyH",
      },
    },
    {
      accessKeyId: "AKIAJVNMZLKYJOXWOJOQ",
      secretAccessKey: "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",
      sessionToken:
        "Atzr|IwEBIEQvpigkU5V73lE9uVWjn9ICy2WAUsSxdpLpGF2pqx9gJM-7bM__v8c7KKAeHizbJaCxVL8NLPuXDP_cOnacp0N35yzwjiimhnkaYsV5M_K-NPwlD-6BGzKLmwegrSXNXdM4-ptFE_xLlnjkmFhuSg1K_S6dES5ahIQa_7znIT19aPd4hXtupRGYPApq3laovhuoIRt0a4xeVJ31gyaZUW7cE3xMsTATmVgd-BeJTcsslsKJYwOGYK-6KY0IpaYiah-8Pd4or-nwNECxF0DguXDk-MearDDGgatO7o4r02n0QA",
    }
  );
  console.log(ss);
  return ss;
}

// makeTestCall()
