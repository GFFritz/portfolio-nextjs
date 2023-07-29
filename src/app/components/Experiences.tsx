import Link from 'next/link'
import Tag from './Tags'
import Exp from './Exp'

export function Experiences() {
  return (
    <div className="mx-auto flex w-full flex-col items-center gap-4">
      <h1 className="mb-4 text-center text-2xl font-medium text-zinc-100">
        Experiences
      </h1>
      <div className="w-4/5 gap-5 md:flex md:w-2/4">
        <div className="text-sm text-zinc-400 md:w-1/3">
          JAN 2018 - APR 2018
        </div>
        <div>
          <h1 className="font-semibold uppercase text-zinc-200">
            N49 NEGÓCIOS DIGITAIS
          </h1>
          <span className="text-sm text-zinc-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            tempore delectus assumenda voluptas minus odit inventore laborum ut
            nostrum ipsam, sed, quasi incidunt. Nisi harum dolor maiores
            blanditiis. Iusto, numquam.
          </span>
          <div className="my-2 flex flex-wrap gap-1">
            <Tag text="Bootstrap" />
            <Tag text="PHP" />
          </div>
        </div>
      </div>
      <div className="w-4/5 gap-5 md:flex md:w-2/4">
        <div className="text-sm text-zinc-400">DEZ 2019 - DEZ 2020</div>
        <div className="text-zinc-100">
          <h1 className="font-semibold uppercase text-zinc-200">
            BDI BRASIL E-BUSINESS DIGITAL
          </h1>
          <span className="text-sm text-zinc-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            tempore delectus assumenda voluptas minus odit inventore laborum ut
            nostrum ipsam, sed, quasi incidunt. Nisi harum dolor maiores
            blanditiis. Iusto, numquam.
          </span>
          <div className="my-2 flex flex-wrap gap-1">
            <Tag text="Bootstrap" />
            <Tag text="PHP" />
          </div>
        </div>
      </div>
      <div className="w-4/5 gap-5 md:flex md:w-2/4">
        <div className="text-sm text-zinc-400">JAN 2021 - MAR 2023</div>
        <div className="text-zinc-100">
          <h1 className="font-semibold uppercase text-zinc-200">
            Credencie Consultas Cadastrais
          </h1>
          <span className="text-sm text-zinc-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            tempore delectus assumenda voluptas minus odit inventore laborum ut
            nostrum ipsam, sed, quasi incidunt. Nisi harum dolor maiores
            blanditiis. Iusto, numquam.
          </span>
          <div className="my-2 flex flex-wrap gap-1">
            <Tag text="Bootstrap" />
            <Tag text="NodeJS" />
            <Tag text="ReactJS" />
            <Tag text="Laravel 8" />
            <Tag text="Slim" />
            <Tag text="Codeigniter" />
            <Tag text="Opencart" />
            <Tag text="Git" />
            <Tag text="Linux" />
            <Tag text="AWS" />
            <Tag text="PHP" />
          </div>
        </div>
      </div>

      <Exp
        period="JAN 2021 - MAR 2023"
        title="Credencie Consultas Cadastrais"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
        tempore delectus assumenda voluptas minus odit inventore laborum ut
        nostrum ipsam, sed, quasi incidunt. Nisi harum dolor maiores
        blanditiis. Iusto, numquam."
        tags={[
          'Tailwindcss',
          'Reacjs',
          'Laravel 8',
          'Slim',
          'Codeigniter',
          'Opencart',
          'Git',
          'Linux',
          'AWS',
          'PHP',
          'Boostrap',
          'Node.js',
          'TypeScript',
          'MongoDB',
          'REST API',
        ]}
      />
    </div>
  )
}
