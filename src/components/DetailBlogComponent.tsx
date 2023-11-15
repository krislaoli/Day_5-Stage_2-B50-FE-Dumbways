import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

export default function DetailBlogComponent() {
  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="bg-white w-4/5 py-11 px-7">
          <div className="flex items-center">
            <div>
              <Link to="/">
                <p className="flex items-center text-2xl">
                <GoArrowLeft className="text-2xl" />
                  <span className="ml-2">Beranda</span>
                </p>
              </Link>
            </div>
            <div className="flex-grow text-center">
              <h1 className="text-2xl mr-24 font-semibold">BERITA HARI INI</h1>
            </div>
          </div>
          <div>
            <h1
              className="text-center text-5xl font-bold mt-10"
              style={{ color: "rgba(94, 90, 0, 1)" }}
            >
              KPU DUMBWAYS TETAPKAN 3 MENTOR TERBAIK
            </h1>
            <p className="text-center text-2xl font-semibold">Super Admin</p>
            <p className="text-center text-2xl font-semibold">Senin, 16 Nov 2023</p>
          </div>
          <img
            src="public/rapat-kpu.png"
            alt="RapatKPU"
            className="h-[700px] w-full object-cover mt-10"
          />
          <p className="font-medium text-2xl text-justify mt-10 mb-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            saepe aperiam odit ipsa, laudantium et. Possimus asperiores
            blanditiis laborum voluptas ex dignissimos quasi voluptatibus
            accusantium, minus aut aspernatur repudiandae officiis. Fuga
            similique ipsam officia quasi doloribus labore, fugiat et ullam!
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            doloremque eum perspiciatis? Suscipit fugit, aperiam repudiandae
            perspiciatis ad consequuntur possimus nulla ipsa. Error soluta fugit
            provident aliquam consequatur enim est, eum minus cupiditate.
            Quisquam consequuntur ipsam voluptates mollitia delectus nulla
            necessitatibus praesentium, adipisci ullam quis, sit in itaque
            libero blanditiis doloribus autem unde iste voluptatem nisi error
            maiores, earum sed!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            temporibus nulla eligendi sit dolor id! Voluptates facere cupiditate
            ullam rerum quas repellendus, error quam quibusdam autem optio
            aperiam, corrupti tempore delectus doloribus. Mollitia, fugit
            voluptate saepe assumenda optio praesentium culpa laudantium earum
            pariatur sapiente recusandae modi perspiciatis aspernatur voluptatum
            ipsa!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            officia earum placeat tenetur iusto. Molestiae necessitatibus neque
            ex magnam voluptatem eius atque. Incidunt tenetur, optio possimus
            officiis quae, quasi illo ratione minima soluta provident iste
            architecto? Atque, veritatis autem officiis ullam molestias eos nam
            itaque totam ut animi facilis fugit maxime nostrum dicta magnam quo
            blanditiis optio quidem soluta sequi cupiditate! Recusandae
            reprehenderit esse sunt corporis corrupti repudiandae laudantium?
            Eligendi dolores et beatae quas nulla esse itaque totam numquam?
            Dolorum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui eligendi, quod non ad, inventore officiis beatae fugiat ab doloremque debitis provident nulla cumque quis assumenda eaque repudiandae quibusdam quaerat!
          </p>
        </div>
      </div>
    </>
  );
}
