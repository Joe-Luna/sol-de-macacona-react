import { Formulario } from "@/components";
import { ourTeam } from "@/helpers";
import { Avatar } from "@mui/material";

const About = () => {
  return (
    <>
      <div
        className="bg-cover bg-fondo1 w-full h-[800px] bg-center relative flex items-center justify-center 
      max-sm:w-full max-sm:bg-cover max-sm:bg-fondo1 max-sm:h-[350px] max-sm:bg-center max-sm:relative max-sm:flex max-sm:items-center max-sm:justify-center"
      >
        <div className="bg-white mx-96 text-orange-950 p-5 w-[800px] opacity-60 absolute text-5xl font-Itim text-center drop-shadow-2xl max-sm:absolute max-sm:py-4 max-sm:px-4 max-sm:opacity-60 max-sm:font-Itim max-sm:text-xl flex flex-col gap-8 max-md:mx-32 max-sm:mx-5 max-sm:gap-1 max-sm:w-[300px]">
          <h2 className="md:text-4xl">¿Quiénes somos?</h2>
          <p className="text-2xl max-sm:text-xs">
            Somos el equipo detrás de Sol de Macacona, un grupo de profesionales
            altamente capacitados en el sector inmobiliario. Nuestra dedicación
            se centra en descubrir, desarrollar y promover los proyectos más
            sobresalientes a lo largo del país.
          </p>
        </div>
      </div>
      <div className="container mx-auto relative flex justify-center max-sm:mx-auto max-sm:relative max-sm:justify-center">
        {/* Mision | Vision */}
        <div className="bg-slate-950 text-white p-8 flex  gap-4 w-[850px] mx-auto absolute top-1/2 transform -translate-y-1/2 drop-shadow-xl max-sm:p-4 max-sm:flex-col max-sm:gap-2 max-sm:w-[340px] max-sm:h-[250px] max-sm:mx-auto max-sm:absolute max-sm:top-0.5 max-sm:transform max-sm:-translate-y-[30%]">
          <div className="flex flex-col items-center justify-center gap-2 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-1">
            <h2 className="text-3xl font-bold max-sm:text-xs max-sm:font-bold">
              Misión
            </h2>
            <span className="font-normal text-xl text-center max-sm:font-medium max-sm:text-xs max-sm:text-center">
              Brindar una asesoría inmobiliaria personalizada e integral
              orientada a personas y empresas para poder cumplir con las
              exigencias de nuestros clientes en el mercado inmobiliario,
              Trabajando siempre con ética profesional, con honestidad y
              trasparencia en todas las etapas de la venta.
            </span>
          </div>
          <div className="w-2 bg-white "></div>
          <div className="flex flex-col items-center justify-center gap-2 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:gap-1">
            <h2 className="text-3xl font-bold max-sm:text-sm ">Visión</h2>
            <span className="font-normal text-xl text-center max-sm:text-xs">
              Convertirnos en la empresa de referencia del sector inmobiliario
              en la provincia, con objeto de que las personas que intervienen en
              este mercado piensen en nosotros como primera opción en el momento
              de vender, comprar o alquilar una vivienda.
            </span>
          </div>
        </div>
      </div>
      <div className="bg-fondoAboutCenter h-screen pt-12 bg-cover max-sm:bg-fondoAboutCenter  max-sm:w-full max-sm:h-[220px]"></div>
      <div className="py-4 flex flex-col gap-4 bg-white">
        <h3 className="text-center font-bold text-3xl max-sm:text-3xl ">
          Valores
        </h3>
        <div className="flex max-sm:flex-col items-center justify-center gap-8 max-sm:gap-10 max-sm:mx-4">
          <div className="hover:cursor-pointer relative group">
            <div className="relative">
              <img
                src="./Proactividad.webp"
                alt="BG"
                className="rounded-md max-sm:w-72 transition-opacity duration-300 h-60 border"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="absolute top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all text-white flex flex-col items-center justify-center">
              <span className="font-bold text-3xl">Ser Proactivos</span>
              <p className="font-medium text-base">
                Teniendo una iniciativa, elaborando un plan de marketing
                individualizado a cada propiedad. Tratamos de adelantarnos a las
                situaciones adversas con el único objetivo de ofrecer un
                asesoramiento de calidad.
              </p>
            </div>
          </div>
          <div className="hover:cursor-pointer relative group">
            <div className="relative">
              <img
                src="./Pasion.webp"
                alt="BG"
                className="rounded-md max-sm:w-72 transition-opacity duration-300 h-60"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="absolute top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all text-white flex flex-col items-center justify-center">
              <span className="font-bold text-3xl">Pasión</span>
              <p className="font-medium text-base">
                Disfrutamos de nuestro trabajo, contando con expertos en la
                materia, dedicados con nuestra labor intermediaria para lograr
                sacar el mayor rendimiento de nuestras propiedades para
                beneficios de nuestros clientes.
              </p>
            </div>
          </div>
          <div className="hover:cursor-pointer relative group">
            <div className="relative">
              <img
                src="./Profesional.avif"
                alt="BG"
                className="rounded-md max-sm:w-72 transition-opacity duration-300 h-60"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="absolute top-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all text-white flex flex-col items-center justify-center">
              <span className="font-bold text-3xl">Profesionalidad</span>
              <p className="font-medium text-sm">
                Siempre te ofreceremos soluciones, lo hacemos desde el
                conocimiento técnico de la materia. Trabajamos con propiedades
                con alto potencial por lo que la exigencia en el servicio debe
                ser máxima. En H.O. CONSTRUCTORES E.I.R.L. cada cliente es
                único; respetamos sus preferencias por encima de todo y nos
                adaptamos a ellas.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 my-4">
          <h3 className="font-bold text-3xl">Nuestro Equipo</h3>
          <div className="flex max-sm:flex-col gap-10 max-sm:gap-5">
            {ourTeam.map(({ src, alt, name, position }, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center shadow-lg p-5 rounded-lg border hover:border-red-400 transition-all w-40"
              >
                <Avatar alt={alt} sx={{ width: 80, height: 80 }} src={src} />

                <span className="text-lg font-semibold text-center ">
                  {name}
                </span>
                <span className="text-sm font-semibold text-center">
                  {position}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Formulario />
    </>
  );
};

export default About;
