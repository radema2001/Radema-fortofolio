import Card from 'react-bootstrap/Card';
import './CardProject.css';
import React from 'react'
;

function CardProject({judul,subjudul,deskripsi}) {   
  return (
    <Card style={{ width: '22rem' }}>
    <Card.Body>
      <Card.Title className='judul'>{judul}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{subjudul}</Card.Subtitle>
      <Card.Text>
     {deskripsi}
      </Card.Text>
      <Card.Link href="#">Link</Card.Link>
    </Card.Body>
  </Card>
    
  );
}

export default CardProject;

// import Card from 'react-bootstrap/Card';
// import ReactRoundedImage from "react-rounded-image";
// import React from 'react';
// import './CardProject.css'
// import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

// function CardProject() {
//   const tentang = [
//     {
//       image: require('../../assets/Image/guguskode.png'),
//       nama: "Nada Filsa Chaitra",
//       pendidikan: "S1 Teknik Informatika",
//       pengalaman: "Frontend Developer Internship BALITTAS, Malang",
//       linkedin: "https://www.linkedin.com/in/radema-panjaitan-a69263181/",
//       instagram: "https://www.instagram.com/rademapanjaitan02_/?hl=id",
//       WhatsApp: "https://wa.me/6287765425278"
//     },
//     {
//       image: require('../../assets/Image/guguskode.png'),
//       nama: "Syifa Nur Nabila ",
//       pendidikan: "SMK Teknik Komputer & Jaringan",
//       pengalaman: "  Mengikuti Bootcamp Front End di Kawah Edukasi",
//       linkedin: "https://www.linkedin.com/in/radema-panjaitan-a69263181/",
//       instagram: "https://www.instagram.com/rademapanjaitan02_/?hl=id",
//       WhatsApp: "https://wa.me/6289668222474"
//     },
//     {
//       image: require('../../assets/Image/guguskode.png'),
//       nama: "Wawan",
//       pendidikan: "S1 Informatika",
//       pengalaman: "Teknisi Komputer & Jaringan Di PT. Egyd Komputer",
//       linkedin: "https://www.linkedin.com/in/radema-panjaitan-a69263181/",
//       instagram: "https://www.instagram.com/rademapanjaitan02_/?hl=id",
//       WhatsApp: "https://wa.me/6285712799954"
//     },
//     {
//       image: require('../../assets/Image/guguskode.png'),
//       nama: "Miftachul Huda",
//       pendidikan: "D3 Teknologi Hasil Pertanian",
//       pengalaman: "Frontend Developer Freelancer",
//       linkedin: "https://www.linkedin.com/in/radema-panjaitan-a69263181/",
//       instagram: "https://www.instagram.com/rademapanjaitan02_/?hl=id",
//       WhatsApp: "https://wa.me/6285258166766"
//     },
//     {
//       image: require("../../assets/Image/guguskode.png"),
//       nama: "Radema Panjaitan",
//       pendidikan: "D3 Teknologi Komputer",
//       pengalaman: "Mengikuti Bootcamp Front End di Kawah Edukasi",
//       linkedin: "https://www.linkedin.com/in/radema-panjaitan-a69263181/",
//       instagram: "https://www.instagram.com/rademapanjaitan02_/?hl=id",
//       WhatsApp: "https://wa.me/6282267041718"
//     }
//   ];

//   return (
//     <React.Fragment>
//       {
//         tentang.map((value, index) => (
//           <Card style={{ width: '18rem' }}>
//       <Card.Body>
//         <Card.Title>{value.nama}</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">{value.pendidikan}</Card.Subtitle>
//         <Card.Text>
//        {value.pengalaman}
//         </Card.Text>
//         <Card.Link href="#">Card Link</Card.Link>
//         <Card.Link href="#">Another Link</Card.Link>
//       </Card.Body>
//     </Card>
//         ))
//       }
//     </React.Fragment>
//   );
// }

// export default CardProject;