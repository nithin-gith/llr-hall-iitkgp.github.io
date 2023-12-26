import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../style/HallCouncil.css";
import FacebookIcon from "@mui/icons-material/FacebookSharp";

import hp2022 from "../assets/img/Hall Council/22-23/Anuj Singh.jpg";
import ssm2022 from "../assets/img/Hall Council/22-23/Sparsh Kumar Jha.jpg";
import tech2223 from "../assets/img/Hall Council/22-23/Dhruv Rathi.jpg";
import socult2223 from "../assets/img/Hall Council/22-23/Shriyam Pandey.jpg";
import sports2223 from "../assets/img/Hall Council/22-23/Prathamesh Chaudhary.jpg";
import mess2223 from "../assets/img/Hall Council/22-23/Jai Marothiya.jpg";
import mess_22223 from "../assets/img/Hall Council/22-23/Akash Tripathi.jpg";
import maintenance2223 from "../assets/img/Hall Council/22-23/Pavan Kumar Rathod.jpg";
import maintenance_22223 from "../assets/img/Hall Council/22-23/Mithun K Singh.jpg";
import library2223 from "../assets/img/Hall Council/22-23/Kunal Kumar.jpg";
import studentswelfare2223 from "../assets/img/Hall Council/22-23/Amgoth Jithendra Kumar Naik.jpg";
import coordinator2223 from "../assets/img/Hall Council/22-23/Amitava Roy.jpg";
import pgrepresentative from "../assets/img/Hall Council/22-23/Sarkar.jpg";
import pgrepresentative2 from "../assets/img/Hall Council/22-23/Nazeer.jpg";

// import * as images from '../assets/img/Hall_Council/23-24'

import hp2024 from "../assets/img/Hall Council/23-24/priyansh_shrivastava.jpeg"
import ssm2024 from "../assets/img/Hall Council/23-24/yash_jadhav.jpeg";
import tech2024 from "../assets/img/Hall Council/23-24/Avinash.jpg";
import socult2024 from "../assets/img/Hall Council/23-24/sanjay_mali.jpg";
import sports2024 from "../assets/img/Hall Council/23-24/akshat_shrivastava.jpeg";
import mess2024 from "../assets/img/Hall Council/23-24/Rahul_mehra_1.jpg";
import maintenance2024 from "../assets/img/Hall Council/23-24/mayank_kumar.jpeg";
import library2024 from "../assets/img/Hall Council/23-24/sanidhya.jpeg";
import studentswelfare2024 from "../assets/img/Hall Council/23-24/Bikash_montay.jpeg";
import coordinator2024 from "../assets/img/Hall Council/23-24/keshav_patidar.jpeg";
// import pgr2024 from "../assets/img/Hall Council/23-24/Sarkar.jpg";
// import pgr22024 from "../assets/img/Hall Council/23-24/Nazeer.jpg";


import hp from "../assets/img/Hall Council/current/Divakar Chauhan.jpg";
import ssm from "../assets/img/Hall Council/current/Dhruv Singhal.jpg";
import tech2122 from "../assets/img/Hall Council/current/Aditya Verma.jpg";
import socult2122 from "../assets/img/Hall Council/current/Nishant gahlaut.jpg";
import sports2122 from "../assets/img/Hall Council/current/Nitin Baghel.jpg";
import alumni2122 from "../assets/img/Hall Council/current/Aditya Agrawal.jpg";
import mess2122 from "../assets/img/Hall Council/current/Akshat Sharma.jpg";
import library2122 from "../assets/img/Hall Council/current/Ishan Goel.jpg";
import maintenance2122 from "../assets/img/Hall Council/current/Anuj Singh.jpg";
import studentswelfare2122 from "../assets/img/Hall Council/current/Ashish Gupta.jpg";
import hp2021 from "../assets/img/Hall Council/20-21/Saurabh Gupta.jpg";
import ssm2021 from "../assets/img/Hall Council/20-21/Rupam Kumar Dubey.jpg";
import tech2021 from "../assets/img/Hall Council/20-21/Rajsekhar Mishra.jpg";
import mess2021 from "../assets/img/Hall Council/20-21/Itta Rahul Roy.jpg";
import maintenance2021 from "../assets/img/Hall Council/20-21/Dhruv Singhal.jpg";
import sports2021 from "../assets/img/Hall Council/20-21/Paras Malli.jpg";
import alumni2021 from "../assets/img/Hall Council/20-21/Digvijay Nath Tiwari.jpg";
import socult2021 from "../assets/img/Hall Council/20-21/Rohan Gundu.jpg";
import studentswelfare2021 from "../assets/img/Hall Council/20-21/Sumit Kumar.jpg";
import library2021 from "../assets/img/Hall Council/20-21/Uyyala Vijay Kumar.jpg";
import hp1920 from "../assets/img/Hall Council/19-20/hp1920.jpg";
import ssm1920 from "../assets/img/Hall Council/19-20/ssm1920.jpg";
import alumni1920 from "../assets/img/Hall Council/19-20/Alumni1920.jpg";
import library1920 from "../assets/img/Hall Council/19-20/library1920.jpg";
import maintenance1920 from "../assets/img/Hall Council/19-20/Maintenance1920.jpg";
import mess1920 from "../assets/img/Hall Council/19-20/mess1920.jpg";
import socult1920 from "../assets/img/Hall Council/19-20/socult1920.jpg";
import sports1920 from "../assets/img/Hall Council/19-20/sports1920.jpg";
import studentswelfare1920 from "../assets/img/Hall Council/19-20/studentswelfare1920.jpg";
import tech1920 from "../assets/img/Hall Council/19-20/tech1920.jpg";
// import "../assets/img/Hall Council/23-24"
import { Fade } from "@mui/material";
// import Card from "../components/Sections/Card";
import Card2 from "../components/Sections/Card2";
import "../style/Card.css";
import "../style/index.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function HallCouncil() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="box">
        <div className="head">
          <h2 className="text">Hall Council</h2>
        </div>

        <Box sx={{ width: "100%" }}>
          <Box  sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
            
              style={{ marginTop: "2rem" }}
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="dark" 
              indicatorColor="secondary" 
              centered
            >
              {/* <Tab label="2023-2024" style ={{outline:"none" ,width:"20%"}} {...a11yProps(0)} /> */}
              <Tab label="2023-2024" style ={{outline:"none" ,width:"20%"}} {...a11yProps(0)} />
              <Tab label="2022-2023" style ={{outline:"none" ,width:"20%"}} {...a11yProps(1)} />
              <Tab label="2021-2022" style ={{outline:"none" ,width:"20%"}} {...a11yProps(2)} />
              <Tab label="2020-2021" style ={{outline:"none" ,width:"20%"}} {...a11yProps(3)} />
              <Tab label="2019-2020" style ={{outline:"none" ,width:"20%"}} {...a11yProps(4)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className=" row justify-content-center">
              <Card2
                img={hp2024}
                name="Priyansh Srivastava"
                position="Hall President"
                fb="https://www.facebook.com/profile.php?id=100065067784365"
                linkedin=""
              />

            <Card2
                img={ssm2024}
                name="Yash Jadhav"
                position="Second Senate Member"
                fb="https://www.facebook.com/profile.php?id=100008659692398"
                linkedin="https://www.linkedin.com/in/yash-jadhav-305711204/"
              />
            </div>

            <div className="row justify-content-center">
                 <Card2
                img={socult2024}
                name="Sanjay Mali"
                position="General Secretary Social and Cultural"
                fb="https://www.facebook.com/profile.php?id=100024642257170"
                linkedin="https://www.linkedin.com/in/sanjaymali/"
                // style={{width:"20%"}}
              />
              <Card2 
                img={sports2024}
                name="Akshat Srivastava"
                position="General Secretary Sports and Games "
                fb="https://www.facebook.com/profile.php?id=100078280280924"
                linkedin="https://www.linkedin.com/in/akshat-srivastava-6182b4229/"
              />
              <Card2
                img={tech2024}
                name="Avinash Kalepu"
                position="General Secretary Technology"
                fb="https://www.facebook.com/avinash.kalepu.9"
                linkedin="https://www.linkedin.com/in/kalepu-avinash-966b15229/"
              />
              <Card2
                img={mess2024}
                name="Rahul Mehra"
                position="General Secretary Mess"
                fb="https://www.facebook.com/profile.php?id=100075151239715"
                linkedin="https://www.linkedin.com/in/rahul-mehra-34b8ab247/"
              />   
               <Card2
                img={maintenance2024}
                name="Mayank Kumar"
                position="General Secretary Maintenance"
                fb="https://www.facebook.com/profile.php?id=100075333348154"
                linkedin="https://www.linkedin.com/in/mayank-kumar-b8693915a/"
              />
              <Card2
                img={library2024}
                name="Sanidhya Agarwal"
                position="General Secretary Library and Alumni Affairs "
                fb="https://www.facebook.com/profile.php?id=100074188981636"
                linkedin="https://www.linkedin.com/in/sanidhya-agarwal-a57a71222/"
              />
              <Card2
                img={studentswelfare2024}
                name="Bikash Mohanty"
                position="General Secretary Students' Welfare "
                fb="https://www.facebook.com/bikash.mohanty.9279"
                linkedin="https://www.linkedin.com/in/bikash-mohanty-a81178237/"
              />
              <Card2
                img={coordinator2024}
                name="Keshav Patidar"
                position="General Secretary Coordinator "
                fb="https://www.facebook.com/profile.php?id=100073259420475"
                linkedin="https://www.linkedin.com/in/keshav-patidar-aa130224a/"
              />  
               {/* <Card2
                img={pgrepresentative}
                name="Ayan Gope"
                position="PG Representative "
                fb=""
                linkedin=""
              />  
               <Card2
                img={pgrepresentative2}
                name="Pawan Johnson"
                position="PG Representative "
                fb=""
                linkedin=""
              />  */}
            </div>       
              
          </TabPanel>

          <TabPanel value={value} index={1}>
            <div className=" row justify-content-center">
              <Card2
                img={hp2022}
                name="Anuj Singh"
                position="Hall President"
                fb="https://www.facebook.com/anuj.changed"
                linkedin="https://www.linkedin.com/in/anuj-singh-sikarwar-9371701b9/"
              />

              <Card2
                img={ssm2022}
                name="Sparsh Kumar Jha"
                position="Second Senate Member"
                fb=""
                linkedin=""
              />
            </div>

            <div className="row justify-content-center">
              <Card2
                img={socult2223}
                name="Shriyam Pandey"
                position="General Secretary Social and Cultural"
                fb="https://www.facebook.com/shriyam.pandey.33"
                linkedin="https://www.linkedin.com/in/shriyam-pandey-kgp/"
                // style={{width:"20%"}}
              />
              <Card2
                img={sports2223}
                name="Prathamesh Chaudhary"
                position="General Secretary Sports and Games "
                fb="https://www.facebook.com/prathamesh.chaudhary.71"
                linkedin="https://www.linkedin.com/in/prathamesh-chaudhary-a54a8a214/"
              />
              <Card2
                img={tech2223}
                name="Dhruv Rathi"
                position="General Secretary Technology"
                fb="https://www.facebook.com/dhruv.rathi.927980"
                linkedin="https://www.linkedin.com/in/dhruv-rathi-7b828a211/"
              />
              <Card2
                img={mess2223}
                name="Jai Marothiya"
                position="General Secretary Mess"
                fb="https://www.facebook.com/jai.marothiya.1"
                linkedin="https://www.linkedin.com/in/jai-marothiya-7aa9071ba/"
              />   
              <Card2
                img={mess_22223}
                name="Akash Tripathi"
                position="General Secretary Mess"
                fb="https://www.facebook.com/ashu.tripathi80"
                linkedin="https://www.linkedin.com/in/akash-tripathi-032679207/"
              />   
               <Card2
                img={maintenance2223}
                name="Pavan Kumar Rathod"
                position="General Secretary Maintenance"
                fb="https://www.facebook.com/profile.php?id=100009603223226"
                linkedin="https://www.linkedin.com/in/pavan-kumar-rathod-19a6701b9/"
              />
               <Card2
                img={maintenance_22223}
                name="Mithun Kumar Singh"
                position="General Secretary Maintenance"
                fb="https://www.facebook.com/profile.php?id=100077450100519"
                linkedin=""
              />
              <Card2
                img={library2223}
                name="Kunal Kumar"
                position="General Secretary Library and Alumni Affairs "
                fb="https://www.facebook.com/profile.php?id=100008788572995"
                linkedin="https://www.linkedin.com/in/kunal---kumar---/"
              />
              <Card2
                img={studentswelfare2223}
                name="Amgoth Jithendra Kumar Naik"
                position="General Secretary Students' Welfare "
                fb="https://www.facebook.com/profile.php?id=100007928808203"
                linkedin="https://www.linkedin.com/in/amgoth-jithender-kumar-naik-766442225/"
              />
              <Card2
                img={coordinator2223}
                name="Amitava Roy"
                position="General Secretary Coordinator "
                fb="https://www.facebook.com/amitava.roy.33821"
                linkedin="https://www.linkedin.com/in/amitava-roy/"
              />  
               <Card2
                img={pgrepresentative}
                name="Rajdeep Sarkar"
                position="PG Representative "
                fb=""
                linkedin=""
              />  
               <Card2
                img={pgrepresentative2}
                name="Mohammed Nazeer"
                position="PG Representative "
                fb=""
                linkedin=""
              />  
            </div>      
              
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className=" row justify-content-center">
              <Card2
                img={hp}
                name="Divakar Chauhan"
                position="Hall President"
                fb="https://www.facebook.com/Domvoi"
                linkedin="https://www.linkedin.com/in/divakar-chauhan-6b4480189"
              />

              <Card2
                img={ssm}
                name="Dhruv Singhal"
                position="Second Senate Member"
                fb="https://www.facebook.com/dhruv.singhal.161"
                linkedin="https://www.linkedin.com/in/dhruv-singhal-709795118"
              />
            </div>

            <div className="row justify-content-center">
              <Card2
                img={socult2122}
                name="Nishant Gahlaut"
                position="General Secretary Social and Cultural"
                fb="https://www.facebook.com/nishantgahlaut.nishantgahlaut.3"
                linkedin="https://www.linkedin.com/in/nishant-gahlaut-28566818b/"
                style={{width:"20%"}}
              />
              <Card2
                img={sports2122}
                name="Nitin Baghel"
                position="General Secretary Sports and Games "
                fb="https://www.facebook.com/nitin.baghel.92372446"
                linkedin="https://www.linkedin.com/in/nitin-baghel-b1b3361b1"
              />
              <Card2
                img={tech2122}
                name="Aditya Verma"
                position="General Secretary Technology"
                fb="https://www.facebook.com/profile.php?id=100005749835976"
                linkedin="https://www.linkedin.com/in/aditya-verma-7236a2107/"
              />
              <Card2
                img={mess2122}
                name="Akshat Sharma"
                position="General Secretary Mess"
                fb="https://www.facebook.com/profile.php?id=100039538400553"
                linkedin="https://www.linkedin.com/in/akshat-sharma-1004861b1"
              />   
               <Card2
                img={maintenance2122}
                name="Anuj Singh"
                position="General Secretary Maintenance"
                fb="https://facebook.com/anuj.changed"
                linkedin="https://www.linkedin.com/in/anuj-singh-9371701b9/"
              />
              <Card2
                img={library2122}
                name="Ishan Goel"
                position="General Secretary Library "
                fb="https://www.facebook.com/ishan.goel.9889"
                linkedin="https://www.linkedin.com/in/ishan-goel-6377811b9"
              />
              <Card2
                img={studentswelfare2122}
                name="Ashish Gupta"
                position="General Secretary Students' Welfare "
                fb="https://www.facebook.com/profile.php?id=100006281109857"
                linkedin="https://www.linkedin.com/in/ashishgiitkgp"
              />
              <Card2
                img={alumni2122}
                name="Aditya Agrawal"
                position="General Secretary Alumni Affairs "
                fb="https://www.facebook.com/adityaagrawal.99/"
                linkedin="https://www.linkedin.com/in/adityaagrawal99/"
              />  
            </div>      
              
          </TabPanel>

          <TabPanel value={value} index={3}>
            <div className=" row justify-content-center">
              <Card2
                img={hp2021}
                name="Saurabh Gupta"
                position="Hall President"
                fb="https://www.facebook.com/saurabhggg"
                linkedin="https://www.linkedin.com/in/saurabh-gupta-1b334479/"
              />

              <Card2
                img={ssm2021}
                name="Rupam Kumar Dubey"
                position="Second Senate Member"
                fb="https://www.facebook.com/rupam.kumardubey.9"
                linkedin="https://www.linkedin.com/in/rupamkumardubey/"
              />
            </div>

            <div className="row justify-content-center">
              <Card2
                img={socult2021}
                name="Rohan Rajmohan Gundu"
                position="General Secretary Social and Cultural"
                fb="https://www.facebook.com/rohan.gundu.90"
                linkedin="https://www.linkedin.com/in/rohan-gundu-4085b21aa/"
              />
              <Card2
                img={sports2021}
                name="Paras Malli"
                position="General Secretary Sports and Games "
                fb="https://www.facebook.com/ParasMalli"
                linkedin="https://www.linkedin.com/in/paras-malli-a93886186/"
              />
              <Card2
                img={tech2021}
                name="Rajshekhar Mishra"
                position="General Secretary Technology"
                fb="https://www.facebook.com/rajshekhar.mishra.5811"
                linkedin="https://www.linkedin.com/in/rajshekhar-mishra-/"
              />
              <Card2
                img={mess2021}
                name="Itta Rahul Roy"
                position="General Secretary Mess"
                fb="https://www.facebook.com/RahulRoy272"
                linkedin="https://www.linkedin.com/in/rahul-roy-itta-089588195/"
              />
              <Card2
                img={maintenance2021}
                name="Dhruv Singhal"
                position="General Secretary Maintenance"
                fb="https://www.facebook.com/dhruv.singhal.161"
                linkedin="https://www.linkedin.com/in/dhruv-singhal-709795118/"
              />
              <Card2
                img={library2021}
                name="Uyyala Vijay Kumar"
                position="General Secretary Library "
                fb="https://www.facebook.com/uyyala.vijay30"
                linkedin="https://www.linkedin.com/in/vijay-uyyala/"
              />
              <Card2
                img={studentswelfare2021}
                name="Sumit Kumar"
                position="General Secretary Students' Welfare "
                fb="https://www.facebook.com/profile.php?id=100027529696204"
                linkedin="https://www.linkedin.com/in/sumitk-99/"
              />
              <Card2
                img={alumni2021}
                name="Digvijay Nath Tiwari"
                position="General Secretary Alumni Affairs "
                fb="https://www.facebook.com/profile.php?id=100017479114314"
                linkedin="https://www.linkedin.com/in/digvijay-tiwari-588a07183/"
              />
              
        
            </div>
            {/* <div className="row justify-content-center">
              
            </div> */}
          </TabPanel>
          <TabPanel value={value} index={4}>
            <div className=" row justify-content-center">
              <Card2
                img={hp1920}
                name="Sudhir Singh Bhadauria"
                position="Hall President"
                fb="https://www.facebook.com/sudhir.singhbhadouria"
                linkedin="https://www.linkedin.com/in/sudhir-singh-bhadauria-a72006129/"
              />

              <Card2
                img={ssm1920}
                name="Devarakonda Vinay Kumar"
                position="Second Senate Member"
                fb="https://www.facebook.com/arjun.vinay.79"
                linkedin="https://www.linkedin.com/in/arjunvinay/"
              />
            </div>

            <div className="row justify-content-center">
              <Card2
                img={socult1920}
                name="Abhishek Kumar"
                position="General Secretary Social and Cultural"
                fb="https://www.facebook.com/profile.php?id=100013978664458"
                linkedin="https://www.linkedin.com/in/abhishek-kumar-5b33bb172/"
              />
              <Card2
                img={sports1920}
                name="Chandraprakash Koshle"
                position="General Secretary Sports and Games "
                fb="https://www.facebook.com/chandraprakash.on"
                linkedin="https://www.linkedin.com/in/chandraprakash-koshle-149546151/"
              />
              <Card2
                img={tech1920}
                name="Ankit Saini"
                position="General Secretary Technology"
                fb="https://www.facebook.com/ankit.sainiz"
                linkedin="https://www.linkedin.com/in/ankit-saini-b79a4a163/"
              />
              <Card2
                img={mess1920}
                name="Nishith Garg"
                position="General Secretary Mess"
                fb="https://www.facebook.com/nishith.garg.46"
                linkedin="https://www.linkedin.com/in/nishithgarg/"
              />
              <Card2
                img={maintenance1920}
                name="Saurabh Gupta"
                position="General Secretary Maintenance"
                fb="https://www.facebook.com/saurabhggg"
                linkedin="https://www.linkedin.com/in/saurabh-gupta-1b334479/"
              />
              <Card2
                img={library1920}
                name="Akshat Agrawal"
                position="General Secretary Library "
                fb="https://www.facebook.com/akshat.agrawal.7140"
                linkedin="https://www.linkedin.com/in/akshat-agrawal-6a5822161/"
              />
              <Card2
                img={studentswelfare1920}
                name="Abhijeet Sharma"
                position="General Secretary Students' Welfare "
                fb="https://www.facebook.com/abhi.jeet.5245"
                linkedin="https://www.linkedin.com/in/abhijeet-sharma-1bab70151/"
              />
              <Card2
                img={alumni1920}
                name="Aakash Boda"
                position="General Secretary Alumni Affairs "
                fb="https://www.facebook.com/nethaaakash"
                linkedin="https://www.linkedin.com/in/aakash-boda-32a05614b/"
              />      

            </div>
            <div className="row justify-content-center">
              
            </div>
          </TabPanel>
        </Box>
      </div>
    </>
  );
}
