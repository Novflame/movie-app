import "../sahar.css";

import {
  Card,
  CardContent,
  colors,
  Typography,
} from "@mui/material";

import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import SpaRoundedIcon from "@mui/icons-material/SpaRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import LocalFloristRoundedIcon from "@mui/icons-material/LocalFloristRounded";

const Sahar = () => {
  return (
    <section className="sahar-page">
      <Typography variant="h3" className="page-title" style={{color:'red'}}>
        🌸 Get Well Soon, Sahar 🌸
      </Typography>

      <Typography className="page-subtitle">
        Every flower blooms after the rain.
      </Typography>

      {/* ---------- Card 1 ---------- */}

      <Card className="firstCardMoM">
        <CardContent className="cardContent">
          <FavoriteRoundedIcon className="cardIcon" />

          <Typography variant="h5" className="cardTitle">
            Thinking of You
          </Typography>

          <Typography className="cardText">
            علمتُ بخبر مرضك، وآلمني ذلك كثيرًا.
            <br />
            يؤسفني أن تمرّي بهذه الفترة الصعبة.
            <br />
            أتمنى من قلبي أن تزول عنكِ هذه الوعكة سريعًا.
            <br />
            تذكري أنكِ لستِ وحدكِ، فهناك من يدعو لكِ ويتمنى لكِ
            كل الخير والعافية.
          </Typography>
        </CardContent>
      </Card>

      {/* ---------- Card 2 ---------- */}

      <Card className="secondCardMom">
        <CardContent className="cardContent">
          <WbSunnyRoundedIcon className="cardIcon" />

          <Typography variant="h5" className="cardTitle">
            Keep Smiling
          </Typography>

          <Typography className="cardText">
            أتمنى لكِ شفاءً عاجلًا وصحةً تملأ أيامكِ من جديد.
            <br />
            ابتسمي...
            <br />
            فلكل تعب نهاية، وبعد كل ضيق فرج.
            <br />
            أسأل الله أن يعيد إليكِ عافيتكِ وفرحتكِ في أقرب وقت.
          </Typography>
        </CardContent>
      </Card>

      {/* ---------- Card 3 ---------- */}

      <Card className="thirdCardMom">
        <CardContent className="cardContent">
          <SpaRoundedIcon className="cardIcon" />

          <Typography variant="h5" className="cardTitle">
            Take Care of Yourself
          </Typography>

          <Typography className="cardText">
            أرجوكِ اعتني بنفسكِ جيدًا.
            <br />
            احرصي على الراحة.
            <br />
            تناولي غذاءً صحيًا يساعد جسمكِ على مقاومة المرض.
            <br />
            ولا تهملي الدواء أو نصائح الطبيب.
            <br />
            عافيتكِ هي الأولوية الآن، وستتجاوزين هذه المرحلة بإذن
            الله.
          </Typography>
        </CardContent>
      </Card>

      {/* ---------- Card 4 ---------- */}

      <Card className="fourthCardMom">
        <CardContent className="cardContent">
          <LocalFloristRoundedIcon className="cardIcon" />

          <Typography variant="h5" className="cardTitle">
            A Little Prayer
          </Typography>

          <Typography className="cardText">
            🌷
            <br />
            اللهم اشفِ سحر شفاءً لا يغادر سقمًا،
            <br />
            وألبسها لباس الصحة والعافية،
            <br />
            وأدخل الطمأنينة إلى قلبها،
            <br />
            واجعل أيامها القادمة مليئة بالراحة والابتسامة.
            <br />
            آمين.
          </Typography>
        </CardContent>
      </Card>
    </section>
  );
};

export default Sahar;