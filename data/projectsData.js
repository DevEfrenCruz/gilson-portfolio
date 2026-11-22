import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'Enterprise AI Agents (Gemini & Tool Calling)',
		url: 'enterprise-ai-agents',
		category: 'Artificial Intelligence',
		img: '/images/dashboard-faltantes-demo.jpg',
		ProjectHeader: {
			title: 'Enterprise AI Agents (Gemini & Tool Calling)',
			publishDate: 'Nov 2026',
			tags: 'AI / Prompt Engineering / Python / Automation',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Arquitectura de Agentes Gemini Enterprise',
				img: '/images/arquitectura-agentes-gemini-enterprise.jpg',
			},
			{
				id: uuidv4(),
				title: 'Flujo de Ejecución de Scripts',
				img: '/images/flujo-ejecucion-scripts.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Contexto del Proyecto',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Entorno',
					details: 'Corporación El Rosado S.A.',
				},
				{
					id: uuidv4(),
					title: 'Rol',
					details: 'Integrador de IA & Automatización',
				},
				{
					id: uuidv4(),
					title: 'Marca',
					details: 'CR Tech Group',
				},
			],
			ObjectivesHeading: 'Objetivo',
			ObjectivesDetails:
				'Potenciar agentes de Gemini Enterprise más allá del chat convencional mediante el desarrollo de scripts personalizados y estructuración avanzada de prompts para automatizar auditorías operativas y control de inventarios.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Gemini Enterprise',
						'Prompt Engineering',
						'Python',
						'Google Apps Script',
						'Tool Calling',
					],
				},
			],
			ProjectDetailsHeading: 'Arquitectura e Impacto',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Implementación de flujos de trabajo asistidos por Inteligencia Artificial Generativa dentro de las operaciones de auditoría y logística retail, reduciendo drásticamente los tiempos de análisis manual en cruces de información crítica.',
				},
				{
					id: uuidv4(),
					details:
						'Desarrollo de scripts modulares que permiten al agente ejecutar reglas de negocio, validar transacciones y generar reportes estructurados directamente desde fuentes operativas.',
				},
			],
			SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// ],
		},
	},
	{
		id: 2,
		title: 'Cardiovascular Risk Prediction Engine (NexuML)',
		url: 'cardiovascular-risk-ml',
		category: 'Machine Learning / Backend',
		img: '/images/nexuml-portal.jpg',
		ProjectHeader: {
			title: 'Cardiovascular Risk Prediction Engine — Plataforma NexuML',
			publishDate: 'Mar 2026',
			tags: 'Machine Learning / FastAPI / Docker / Next.js',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Interfaz Web de Predicción Clínica (NexuML)',
				img: '/images/nexuml-portal.jpg',
			},
			{
				id: uuidv4(),
				title: 'Flujo de Procesamiento de Datos y Validación HITL',
				img: '/images/nexuml-arquitectura.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Contexto del Proyecto',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Plataforma',
					details: 'NexuML (CR Tech Group)',
				},
				{
					id: uuidv4(),
					title: 'Enfoque',
					details: 'ML Engineering & Cloud Architecture',
				},
				{
					id: uuidv4(),
					title: 'GitHub',
					details: 'https://github.com/DevEfrenCruz',
				},
			],
			ObjectivesHeading: 'Objetivo',
			ObjectivesDetails:
				'Desarrollar y desplegar un motor de predicción de riesgo cardiovascular (implementado en la aplicación web NexuML) capaz de integrar datos epidemiológicos y clínicos longitudinales bajo estándares de validación médica.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'FastAPI',
						'Random Forest',
						'Logistic Regression',
						'Scikit-Learn',
						'Docker',
						'Next.js',
					],
				},
			],
			ProjectDetailsHeading: 'Arquitectura e Impacto',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Ingeniería y preprocesamiento sobre una población inicial de 331,464 registros (datasets CDC BRFSS y Framingham NHLBI). Aplicación de imputación múltiple (MICE) y filtrado longitudinal basal para conformar una base funcional de 324,229 vectores de entrenamiento para modelos de Regresión Logística y Random Forest.',
				},
				{
					id: uuidv4(),
					details:
						'Despliegue contenerizado con Docker separando la API de inferencia (FastAPI) del frontend en Next.js. El sistema integró un esquema Human-in-the-Loop (HITL) validado clínicamente mediante auditoría de usabilidad y utilidad con 42 profesionales de la salud.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
	{
		id: 3,
		title: 'Retail Audit & BI Pipeline (+200 Stores)',
		url: 'retail-audit-bi-pipeline',	
		category: 'Data Engineering & Automation',
		img: '/images/ui-project-1.jpg',
		ProjectHeader: {
			title: 'Retail Audit & BI Pipeline (+200 Stores)',
			publishDate: 'May 2026',
			tags: 'Data Engineering / Power BI / Apps Script / APIs',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Dashboard Ejecutivo Power BI',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Servicio de Persistencia Automatizada',
				img: '/images/mobile-project-1.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Contexto del Proyecto',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Alcance',
					details: '+200 Puntos de Venta (Retail Nacional)',
				},
				{
					id: uuidv4(),
					title: 'Servicios',
					details: 'Data Pipelines & Business Intelligence',
				},
				{
					id: uuidv4(),
					title: 'Arquitectura',
					details: 'CR Tech Group Solutions',
				},
			],
			ObjectivesHeading: 'Objetivo',
			ObjectivesDetails:
				'Eliminar la consolidación manual de auditorías de caja, inventarios y novedades operativas a nivel nacional, creando un flujo continuo desde la captura de datos hasta la visualización ejecutiva.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Google Apps Script',
						'Python (Pandas)',
						'Power BI (DAX)',
						'REST APIs',
						'SAP ERP',
					],
				},
			],
			ProjectDetailsHeading: 'Arquitectura e Impacto',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Construcción de una API de integración mediante Google Apps Script (ARMS Audit Persistence Service) para unificar reportes operativos y conectar hojas de cálculo corporativas directamente con modelos analíticos en Power BI.',
				},
				{
					id: uuidv4(),
					details:
						'Desarrollo de scripts en Python para el procesamiento histórico y detección automática de anomalías financieras y diferencias de stock en centros de distribución y tiendas.',
				},
			],
			SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// ],
		},
	},
	{
		id: 4,
		title: 'Institutional Web & Data Platform',
		url: 'institutional-web-platform',
		category: 'Fullstack Web Development',
		img: '/images/web-project-1.jpg',
		ProjectHeader: {
			title: 'Institutional Web & Data Platform',
			publishDate: 'Abr 2025',
			tags: 'React.js / Node.js / Sequelize / Tailwind CSS',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Interfaz Mobile-First',
				img: '/images/web-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Arquitectura Relacional',
				img: '/images/ui-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'Contexto del Proyecto',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Organización',
					details: 'Fundación Aneupi',
				},
				{
					id: uuidv4(),
					title: 'Rol',
					details: 'Desarrollador Fullstack',
				},
			],
			ObjectivesHeading: 'Objetivo',
			ObjectivesDetails:
				'Desarrollar e integrar módulos clave de la plataforma web institucional bajo un diseño responsivo mobile-first y una capa de datos relacional optimizada.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'React.js',
						'JavaScript',
						'Tailwind CSS',
						'Node.js',
						'Sequelize ORM',
						'PostgreSQL',
					],
				},
			],
			ProjectDetailsHeading: 'Arquitectura e Impacto',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Construcción de componentes dinámicos y responsivos en React.js y Tailwind CSS, garantizando compatibilidad multidispositivo y tiempos de carga rápidos.',
				},
				{
					id: uuidv4(),
					details:
						'Modelado de entidades y gestión de consultas en base de datos utilizando Sequelize ORM para asegurar integridad referencial y escalabilidad en el backend.',
				},
			],
			SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// ],
		},
	},
];