
export interface Link {
  name: string;
  url: string;
}

interface Props {
  tools: Link[];
  socials: Link[];
}

export default function Footer(props: Props) {
  return (
      <footer className="flex flex-wrap gap-12 p-8 w-screen text-sm border-t border-focus-medium">
        <ul className="flex flex-col gap-2 font-mono text-kashmir/75">
          <li className='mb-4 font-mono text-metal'>Other Projects</li>
            {props.tools.map( cli => (
              <li key={cli.name} className='flex justify-between items-center'>
                <a href={cli.url} target={'_blank'} className='hover:text-metal/75'>
                  {cli.name}
                </a>
              </li>
            ))}
        </ul>
        <ul className="flex flex-col gap-2 font-mono text-kashmir/75">
          <li className='mb-4 font-mono text-metal'>Socials</li>
            {props.socials.map( item => (
              <li key={item.name} className='flex justify-between items-center'>
                <a href={item.url} target={'_blank'} className='hover:text-metal/75'>
                  {item.name}
                </a>
              </li>
            ))}
        </ul>
      </footer>
  )
}
