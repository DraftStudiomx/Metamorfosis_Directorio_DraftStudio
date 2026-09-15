export const BNI_DIRECTORY_URL =
  "https://bniguanajuato.com/31--gt-leon-(y-alrededores)-metamorfosis-leon/es-MX/memberlist?chapterName=38521&regionIds=19303,19375,3532$isChapterwebsite";

export const DRAFT_STUDIO_URL = "https://draftstudio.mx";

export type Member = {
  name: string;
  company?: string;
  category: string;
  phone: string;
  photo?: string;
  website?: string;
  facebook?: string;
  instagram?: string;
};

/**
 * Fuente: directorio oficial de BNI Guanajuato (ver BNI_DIRECTORY_URL).
 * Capturado 2026-09-14 — el directorio oficial es la fuente viva; actualizar
 * aquí si cambian miembros. website/facebook/instagram no vienen en la
 * fuente: llenar manualmente por miembro cuando se tengan los datos.
 * photo: archivo en /public/members/ (sin foto = avatar genérico).
 */
export const MEMBERS: Member[] = [
  {
    name: "Ernesto Vazquez Lara",
    company: "Logista en transporte asignado",
    category: "Derecho Civil",
    phone: "477 827 8995",
    photo: "/members/ernesto-vazquez-lara.jpg",
  },
  {
    name: "Ernesto Ezequiel Vazquez Villegas",
    company: "Tenepah",
    category: "Sistemas",
    phone: "477 153 9017",
    photo: "/members/ernesto-ezequiel-vazquez-villegas.jpg",
  },
  {
    name: "Gabriela Barroso Villanueva",
    company: "Miss Clean Bajío",
    category: "Productos de Limpieza",
    phone: "477 328 1864",
    photo: "/members/gabriela-barroso-villanueva.jpg",
  },
  {
    name: "Guillermo Nuñez Zambrano",
    company: "Trimada Diseño Audiovisual",
    category: "Video y fotografía corporativa",
    phone: "477 157 4713",
    photo: "/members/guillermo-nunez-zambrano.jpg",
  },
  {
    name: "Joab Brian Cordova Rivera",
    company: "VIBO",
    category: "Construcción Comercial",
    phone: "477 116 4583",
    photo: "/members/joab-brian-cordova-rivera.jpg",
  },
  {
    name: "José Eduardo Porras Alfaro",
    company: "Legara",
    category: "Derecho Laboral",
    phone: "477 288 8221",
    photo: "/members/jose-eduardo-porras-alfaro.jpg",
  },
  {
    name: "Karen Dennette Carpio Ortega",
    company: "KAREN CARPIOOMX",
    category: "Seguro de Vida, Retiro e Incapacidad",
    phone: "442 181 8243",
    photo: "/members/karen-dennette-carpio-ortega.jpg",
  },
  {
    name: "Luis Adrian Murguia Campos",
    company: "LAMC asesor en planeación financiera",
    category: "Seguro de Gastos Médicos",
    phone: "+52 449 127 8946",
    photo: "/members/luis-adrian-murguia-campos.jpg",
  },
  {
    name: "María Isabel Coria Zavaleta",
    company: "VitaHelth y Vida Divina",
    category: "Productos de Salud y Bienestar",
    phone: "477 275 2141",
    photo: "/members/maria-isabel-coria-zavaleta.jpg",
  },
  {
    name: "Martin Guadalupe Tadeo Caldera",
    company: "MARECE",
    category: "Derecho Propiedad Intelectual",
    phone: "477 647 1998",
    photo: "/members/martin-guadalupe-tadeo-caldera.jpg",
  },
  {
    name: "Mónica Romero Romo",
    company: "ROMS Agency",
    category: "Marketing Digital",
    phone: "477 575 3633",
    photo: "/members/monica-romero-romo.jpg",
  },
  {
    name: "Oscar Gabino Espinosa Yada",
    company: "Centro Optico Tamaulipas",
    category: "Cuidado de Ojos",
    phone: "477 133 5371",
    photo: "/members/oscar-gabino-espinosa-yada.jpg",
  },
  {
    name: "Paola Campos Ibarra",
    company: "Diente8 clínica dental",
    category: "Odontóloga, endodoncista",
    phone: "477 754 2348",
    photo: "/members/paola-campos-ibarra.jpg",
  },
  {
    name: "Paulina Monserrat Vázquez Villegas",
    company: "Postres Moon",
    category: "Panadería y Repostería",
    phone: "477 795 9621",
    photo: "/members/paulina-monserrat-vazquez-villegas.jpg",
  },
  {
    name: "Polette Lucero Trenado Andalón",
    company: "Mundo de cuidados",
    category: "Servicio de enfermería y niñeras",
    phone: "477 465 6117",
    photo: "/members/polette-lucero-trenado-andalon.jpg",
  },
  {
    name: "Raul Alejandro Lizárraga Páez",
    company: "Clínica Lucina",
    category: "Fisioterapia",
    phone: "668 212 2528",
    photo: "/members/raul-alejandro-lizarraga-paez.jpg",
  },
  {
    name: "Sergio Eduardo López Lázaro",
    company: "Test Studio",
    category: "Desarrollo Web",
    phone: "442 485 0730",
    photo: "/members/sergio-eduardo-lopez-lazaro.jpg",
  },
  {
    name: "Tere Orozco Bon",
    company: "Weriverso",
    category: "IA + Automatización",
    phone: "566 120 1797",
    photo: "/members/tere-orozco-bon.jpg",
  },
];
