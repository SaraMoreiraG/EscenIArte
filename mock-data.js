export const courses = [
  {
    id: 1,
    title: "Potencial Creativo",
    description: "Desde los conceptos básicos hasta su integración en la creatividad teatral. Inicia tu aventura en el universo de la tecnología del futuro.",
	longDescription: "",
	modules: [
		{
			id:'1',
			name:'Introducción',
			description:'La Inteligencia Artificial y sus Aplicaciones en las Artes Escénicas',
			pdf:'',
			duration:'7',

		}
	]
  },
  {
    id: 2,
    title: "Curso de JavaScript",
    description: "Entiende JavaScript a fondo",
    duration: "4 semanas",
  },
];

export const user = {
  id: 1,
  name: "Juan Pérez",
  email: "juan@example.com",
  enrolledCourses: [1], // IDs de los cursos en los que el usuario está inscrito
};
