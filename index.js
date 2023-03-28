const express = require("express");
const cors = require("cors");
const models = require("./models");
const multer = require("multer");

const app = express();
const port = process.env.PORT || 8080;

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "upload/");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

app.use(express.json());
app.use(cors());
app.use("/upload", express.static("upload"));


app.get("/products", (req, res) => {
  models.Product.findAll({
    // 'ASC','DESC'
    order: [['id', 'ASC']],
    attributes: ["id", "price", "p_name", "p_sdate", "p_edate", "p_country", "p_area", "trans", "retrans", "p_snum", "p_enum", "departure", "redeparture", "count", "theme", "imageUrl", "hotel", "soldout","heart",],
  })
    .then((result) => {
      console.log("product 조회결과:", result);
      res.send({ product: result });
    })
    .catch((err) => {
      console.error(err);
      res.send("에러발생");
    });
});
// let sql=`SELECT * FROM products WHRER theme = ${theme}`;

app.get("/product", (req, res) => {
  models.Product.findAll({
    limit: 4,
    // 'ASC','DESC'
    order: [['id', 'DESC']],
    attributes: ["id", "price", "p_name", "p_sdate", "p_edate", "p_country", "p_area", "trans", "retrans", "p_snum", "p_enum", "departure", "redeparture", "count", "theme", "imageUrl", "hotel", "soldout","heart",],
  })
    .then((result) => {
      console.log("product 조회결과:", result);
      res.send({ product: result });
    })
    .catch((err) => {
      console.error(err);
      res.send("에러발생");
    });
});
app.get("/producttheme", (req, res) => {
  models.Product.findAll({
    // limit: 12,
    // 'ASC','DESC'
    order: [['price', 'ASC']],
    // attributes: ["id", "price", "p_name", "p_sdate", "p_edate", "p_country", "p_area", "trans", "retrans", "p_snum", "p_enum", "departure", "redeparture", "count", "theme", "imageUrl", "hotel","soldout"],
    attributes: ["theme","id", "price", "p_name", "count", "imageUrl", "hotel","soldout","heart",],
    // where:{
    //   theme:theme,
    // }
  })
    .then((result) => {
      console.log("product 조회결과:", result);
      res.send({ product: result });
    })
    .catch((err) => {
      console.error(err);
      res.send("에러발생");
    });
});
app.get("/productdate", (req, res) => {
  models.Product.findAll({
    limit: 6,
    // 'ASC','DESC'
    order: [['p_sdate', 'ASC']],
    attributes: ["id", "price", "p_name", "count", "imageUrl", "soldout", "p_sdate", "p_edate", "departure", "redeparture","heart"],
  })
    .then((result) => {
      console.log("product 조회결과:", result);
      res.send({ product: result });
    })
    .catch((err) => {
      console.error(err);
      res.send("에러발생");
    });
});

app.get("/products/:id", (req, res) => {
  const params = req.params;
  const { id } = params;
  models.Product.findOne({
    where: { id: id },
  })
    .then((result) => {
      console.log("조회결과");
      res.send({
        product: result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send("상품조회시 에러가 발생했습니다");
    });
});
app.get("/productt/:p_area", (req, res) => {
  const params = req.params;
  const { p_area } = params;
  models.Product.findAll({
    where: { p_area: p_area },
  })
    .then((result) => {
      console.log("조회결과");
      res.send({
        product: result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send("상품조회시 에러가 발생했습니다");
    });
});
//상품생성데이터를  데이터베이스 추가
app.post("/products", (req, res) => {
  const body = req.body;
  const { p_name, price, p_sdate, p_edate, p_country, p_area, trans, retrans, p_snum, p_enum, departure, redeparture, count, theme, imageUrl, hotel } = body;
  models.Product.create({
    p_name,
    price,
    p_sdate,
    p_edate,
    p_country,
    p_area,
    trans,
    retrans,
    p_snum,
    p_enum,
    departure,
    redeparture,
    count,
    theme,
    imageUrl,
    hotel,
  })
    .then((result) => {
      console.log("상품생성결과테스트:", result);
      res.send({ result });
    })
    .catch((error) => {
      console.error(error);
      //res.send("상품업로드에 문제가 발생했습니다");
    });
});
app.post("/purchase/:id", (req, res) => {
  const { id } = req.params;
  models.Product.update(
    {
      soldout: 1,
    },
    {
      where: { id },
    }
  )
    .then((ressult) => {
      res.send({ result: true });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("에러가 발생했습니다")
    });
});

app.post("/login", (req, res) => {
  res.send("로그인이 완료되었습니다");
});
app.post('/image', upload.single('image'), (req, res) => {
  const file = req.file;
  console.log(file);
  res.send({
    imageUrl: file.path
  });
});
//app 실행
app.listen(port, () => {
  console.log("OneTrip의 서버가 돌아가고 있습니다.");
  //sequelize.sync() DB에 필요한 테이블 생성
  models.sequelize
    .sync()
    .then(() => {
      console.log("DB연결성공");
    })
    .catch((err) => {
      console.error(err);
      console.log("DB연결에러");
      process.exit();
    });
});
