import Timeline from './Timeline'

export function Experiences() {
  return (
    <div className="mx-auto flex w-full flex-col items-center gap-4">
      <h1 className="mb-4 text-center text-2xl font-medium text-zinc-100">
        Experiences
      </h1>

      <Timeline
        period="JAN 2021 - MAR 2023"
        title="Credencie Consultas Cadastrais"
        subtitle="Fullstack Developer"
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

      <Timeline
        period="DEZ 2019 - DEZ 2020"
        title="Bdi brasil e-business digital"
        subtitle="Front-end Developer"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
        tempore delectus assumenda voluptas minus odit inventore laborum ut
        nostrum ipsam, sed, quasi incidunt. Nisi harum dolor maiores
        blanditiis. Iusto, numquam."
        tags={['HTML', 'CSS', 'MySQL', 'Office']}
      />

      <Timeline
        period="JAN 2018 - APR 2018"
        title="N49 negócios digitais"
        subtitle="AR Manager"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
        tempore delectus assumenda voluptas minus odit inventore laborum ut
        nostrum ipsam, sed, quasi incidunt. Nisi harum dolor maiores
        blanditiis. Iusto, numquam."
        tags={[
          'HTML',
          'CSS',
          'MySQL',
          'PHP',
          'Bootstrap',
          'SASS',
          'Javascript',
          'Codeigniter',
          'Opencart',
        ]}
      />
    </div>
  )
}
