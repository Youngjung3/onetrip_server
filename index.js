const express = require("express");
const cors = require("cors");
const models = require("./models");
const multer=require("multer");

const app = express();
const port = 8080;

const upload=multer({
  storage:multer.diskStorage({
    destination:function(req,file,cb){
      cb(null,"upload/");
    },
    filename:function(req,file,cb){
      cb(null,file.originalname);
    }
  }),
})

app.use(express.json());
app.use(cors());
app.use("/upload",express.static("upload"));

app.get("/products", (req, res) => {
  models.Product.findAll({
	// '참조컬럼','ASC'||'DESC'
	order:[['id','ASC']],
	attributes:["id","price","p_name","p_sdate","p_edate","p_country","p_area","trans","retrans","p_snum","p_enum","departure","redeparture","count","theme","image"]
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
  //const id=params.id;
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
//상품생성데이터를  데이터베이스 추가
app.post("/products", (req, res) => {
  const body = req.body;
  const { p_name, price, p_sdate,p_edate,p_country,p_area,trans,retrans,p_snum,p_enum,departure,redeparture,count,theme,image} = body;
  if (!p_name || !price || !p_country || !p_area || !departure || !redeparture || !trans || !retrans || !p_sdate || !p_edate || !count || !theme) {
    res.send("모든 필드를 입력해주세요");
  }
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
    image,
  })
    .then((result) => {
      console.log("상품생성결과:", result);
      res.send({ result });
    })
    .catch((error) => {
      console.error(error);
      //res.send("상품업로드에 문제가 발생했습니다");
    });
});

app.post("/login", (req, res) => {
  res.send("로그인이 완료되었습니다");
});
app.post('/image',upload.single('image'),(req,res)=>{
  const file=req.file;
  console.log(file);
  res.send({
    image:file.path
    // imageUrl:file.path
  })
})
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
