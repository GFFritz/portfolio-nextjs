import Timeline from './Timeline'

export function Education() {
  return (
    <div className="mx-auto flex w-full flex-col items-center gap-4">
      <h1 className="mb-4 text-center text-2xl font-medium text-zinc-100">
        Education
      </h1>
      <Timeline
        period="MAR 2016 - AUG 2017"
        title="Curso Técnico de TI"
        subtitle="QI escolas e faculdades"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nobis suscipit officia voluptate dicta at id, maiores aut eius nostrum facilis exercitationem dignissimos autem. Veritatis optio possimus nesciunt odio similique."
      />
    </div>
  )
}
