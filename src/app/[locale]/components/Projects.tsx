import { Folder, Github, Link } from 'lucide-react'
import Tag from './Tags'
import Project from './Project'

export function Projects() {
  return (
    <div className="mx-auto w-4/5">
      <h1 className="mb-4 text-center text-2xl font-medium text-zinc-100">
        Projects
      </h1>

      <h2 className="mb-3 flex justify-center text-lg text-zinc-400">
        Projetos Profissionais
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Project
          title="AlertaCar"
          link="https://alertacar.com.br"
          description="Projeto de integração com whatsapp e APIs terceiras e ERP, utilizando SOAP e REST"
          tags={['Reacjs', 'Laravel 8', 'Node', 'REST API', 'SOAP', 'Sockets']}
        />

        <Project
          link="https://indikeganhe.com.br"
          title="IndikeGanhe"
          description="Painel com integrações de CRMs e ERP, utilizando REST"
          tags={['Reacjs', 'PHP', 'Laravel 8', 'REST API']}
        />

        <Project
          link="https://credencieconsultas.com.br"
          title="Pefin"
          description="Painel com integração de API própria e APIs de terceiros"
          tags={['Slim', 'PHP', 'Twig', 'Node']}
        />

        <Project
          title="Credencie Digital"
          description="Ecommerce, integrado com APIs de terceiros"
          tags={['Opencart', 'Lumen', 'PHP', 'Boostrap', 'REST API']}
        />
      </div>

      <hr className="mx-auto my-10 flex w-2/4 rounded-full border-emerald-600 opacity-30" />

      <h2 className="mb-3 flex justify-center text-lg text-zinc-400">
        Projetos Pessoais
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Project
          title="AlertaCar"
          link="https://alertacar.com.br"
          description="Project Description"
          tags={['Reacjs', 'Laravel 8', 'REST API']}
        />

        <Project
          link="https://alertacar.com.br"
          github="http://teste.com"
          title="IndikeGanhe"
          description="Project Description"
          tags={['Reacjs', 'Laravel 8', 'REST API']}
        />

        <Project
          link="https://alertacar.com.br"
          title="AlertaCar"
          description="Project Description"
          tags={['Reacjs', 'Laravel 8', 'REST API']}
        />
      </div>
    </div>
  )
}
