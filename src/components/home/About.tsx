"use client";
import React from "react";
import TxtReveal from "../ui/TxtReveal";

const About = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 min-h-[150vh]">
      <div className="max-w-4xl mx-auto">
        <TxtReveal
          size="2xl"
          align="center"
          variant="primary"
          staggerDelay={0.03}
          baseRotation={0}
          containerClassName="mb-12 font-extrabold"
        >
          Museu Tecnológico: Nossa História e Missão
        </TxtReveal>
        <TxtReveal
          size="lg"
          align="left"
          variant="default"
          staggerDelay={0.05}
          baseRotation={3}
          containerClassName="mb-10 max-w-3xl mx-auto"
        >
          Desde a sua fundação, o Museu Tecnológico tem se dedicado a preservar
          os artefatos e as narrativas que definiram a era digital. Não somos
          apenas um depósito de máquinas antigas, mas um espaço interativo que
          celebra a engenhosidade humana e a rápida evolução que moldou nossa
          sociedade moderna.
        </TxtReveal>
        <div className="my-20">
          <TxtReveal
            size="xl"
            align="center"
            variant="muted"
            staggerDelay={0.06}
            enableBlur={false}
            containerClassName="italic max-w-xl mx-auto"
          >
            "Entender o passado tecnológico é o mapa para inovar no futuro."
          </TxtReveal>
        </div>
        <TxtReveal
          size="md"
          align="left"
          variant="default"
          staggerDelay={0.04}
          containerClassName="mb-10 max-w-3xl mx-auto"
        >
          Explore nossas coleções que abrangem desde a era pré-digital até os
          mais avançados conceitos de inteligência artificial. Convidamos você a
          mergulhar nesta jornada, descobrindo as inovações que transformaram a
          maneira como vivemos, trabalhamos e nos comunicamos.
        </TxtReveal>
      </div>
    </section>
  );
};
export default About;
