import React from "react";
import { motion, useScroll } from "motion/react";

const AdvanceTopic = () => {
  const scrollYProgress = useScroll().scrollYProgress;
  return (
    <div className="h-full w-full bg-black font-mono ">
      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="w-full h-2 bg-red-600 fixed origin-left top-0 left-0"
      ></motion.div>
      <h1 className="text-6xl font-bold text-white flex justify-center p-10 mb-10">
        Pushpa Coding School
      </h1>
      <h2 className="text-xl font-bold text-white p-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        debitis ex id voluptatum maxime et adipisci aspernatur iste nisi,
        quisquam, non inventore? Deserunt quasi sit a corporis quo perferendis
        fugiat obcaecati dolor! Nostrum, a ducimus autem quo neque nisi eius
        laborum labore, id excepturi odit ipsum optio debitis laboriosam
        voluptatem aut ut expedita recusandae inventore? Inventore enim quam cum
        quaerat, commodi autem fugiat, veniam repellat nulla ut, odit beatae in
        dignissimos eos accusamus! Libero et accusamus quidem modi pariatur
        perferendis omnis ratione iste quisquam, expedita soluta, labore non
        voluptate dolorem! Nihil labore iusto autem dolorum assumenda dolor
        laudantium enim consectetur?<br></br>
        <br></br>
        <br></br>
        <br></br>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Nesciunt soluta dolorum beatae quis distinctio! Iste expedita
        architecto, aliquid quos sequi reiciendis, accusamus asperiores debitis
        voluptatibus necessitatibus tempore ducimus praesentium magni quisquam?
        Esse cum rerum voluptatum sequi voluptas exercitationem incidunt libero
        a, quam sit laudantium nostrum non placeat consectetur similique dolores
        quod, maiores cupiditate nam nulla aut quaerat repellendus architecto
        temporibus! Voluptatibus beatae nam earum deleniti voluptates tempora
        illum ullam praesentium. Eveniet labore in doloremque natus magni sit,
        vitae delectus eaque adipisci, vel, ex cum? Maxime, maiores eaque iste
        laborum quia quod quae consectetur veniam consequatur at fugit sed,
        dolore amet.<br></br>
        <br></br>
        <br></br>
        <br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nostrum facere ad eveniet! Mollitia vero vitae blanditiis quia, ea
        tempora rem repellendus delectus veritatis, dolor iusto nam laboriosam
        dolore beatae ipsa corrupti. Consectetur, velit. Et mollitia est
        explicabo architecto iure quibusdam odit consequatur praesentium, alias
        dignissimos. Aut error expedita quaerat mollitia non. Laudantium dicta
        nostrum totam sapiente rem possimus quas quae esse nam tenetur? Eveniet
        quidem iure doloribus saepe. Facere illum amet eveniet at ea soluta
        quisquam possimus non porro ipsam!<br></br>
        <br></br>
        <br></br>
        <br></br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
        id qui enim officiis architecto excepturi? Alias iste possimus
        reprehenderit! Labore corrupti harum quo id dolores, eaque ex, dolorum
        eos a architecto veniam nisi at doloribus delectus optio natus iusto
        aspernatur cum eveniet odit necessitatibus reprehenderit, voluptas error
        sapiente. Officiis voluptatum molestiae iure dignissimos, eius assumenda
        hic labore, voluptas sit esse quo earum! Eligendi vero voluptatibus
        autem voluptate quis? Non, deleniti aliquam reprehenderit molestias
        ullam dolore ea hic veritatis, esse earum quas aspernatur excepturi?
        Perspiciatis suscipit, dolorum eaque voluptates, soluta, porro ullam
        dicta illum sapiente molestias deserunt autem pariatur natus deleniti!
        <br></br>
        <br></br>
        <br></br>
        <br></br>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Repellat tempora, error cumque quas officia ipsa? Odio placeat explicabo
        labore! Sit iste quos perspiciatis sunt labore magnam dolorem cum
        distinctio nostrum!
      </h2>
    </div>
  );
};

export default AdvanceTopic;
