export type ProjectDataType = {
  name: string;
  description: string;
  images: string[];
  redirect: string;
};
export const PROJECTS_DATA: ProjectDataType[] = [
  {
    name: 'wellness pro',
    description: `WellnessPro es un centro de entrenamiento centrado en mejorar el bienestar de las personas , este proyecto es una landing page con un timer a medidad para brindar
    una mejor atenciíón a sus clientes`,
    images: ['projects/welness.png'],
    redirect: 'https://wellnesspro24.com/',
  },
  {
    name: 'Chokim',
    description: `Chokim es una startup que presta servicios a negocios, con el fin de ayudarles a administrar mejor su wifi, poder incorporar medios servicios de agentes de pago, dar Asesoria sobre su negocio y poder abordar las tendencias`,
    images: ['projects/chokim.png'],
    redirect: 'https://chokim-20458.web.app/',
  },
  {
    name: 'Catzen',
    description: `Catzen es una empresa de marketing digital, con el fin de promover tu marca y convertir prospectos en clientes.`,
    images: ['projects/catzen.png'],
    redirect:
      'https://vercel.com/leobar37/catzen-landing/7KktFDEcVDq2ENRduJrGe3sMujzD',
  },
  {
    name: 'Gallery-app',
    description: `Esta aplicación está hecha con reactjs como frontend y nodejs con express en el lado del backend. También tiene un formulario y un sistema de autenticación de Facebook.
    Tiene búsqueda de imágenes y descarga de las misma.`,
    images: ['projects/gallery.png'],
    redirect: 'https://my-gallery.xyz/home',
  },
  {
    name: 'Chat application',
    description: `Esta aplicación es un chat gratuito con autentificación  a través de Google. La aplicación esta cuenta con la implementación de sockets a través de Pusherjs
    , esta app también incorpora un tema oscuro para cuidar la vista de los usuarios. Toda esta aplicación fue creada con las siguientes tecnologías; Angular DJango Docker.`,
    images: ['projects/chat.png'],
    redirect: 'my-chat.xyz',
  },
];
