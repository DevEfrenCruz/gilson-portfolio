import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '../../data/projectsData';

function RelatedProjects() {
	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				Related Projects
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{projectsData.map((project) => {
					return (
						<Link
							href="/projects/[id]"
							as={'/projects/' + project.id}
							key={project.id}
							passHref
						>
							<div className="cursor-pointer group">
								<Image
									src={project.img}
									className="rounded-xl group-hover:opacity-85 transition duration-300"
									width="400"
									height="400"
									alt={project.title}
								/>
								<p className="font-general-medium text-center text-md text-ternary-dark dark:text-ternary-light mt-2">
									{project.title}
								</p>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default RelatedProjects;