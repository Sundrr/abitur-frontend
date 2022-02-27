export const enterTabData = [
    { id: 1, name: "ВХОД", component: "EnterTab" },
    { id: 2, name: "РЕГИСТРАЦИЯ", component: "RegistrationTab" },
  ];

export const adminTabData = [
  { id: 1, name: "Студенты", component: "StudentTab" },
  { id: 2, name: "Ответственные", component: "ResponsibleTab" },
  { id: 3, name: "События", component: "EventTab" },
  { id: 4, name: "Школы", component: "SchoolTab" },
];

export const studentTableConfig = [
  { id: 1, name: 'firstName', friendlyName: 'Имя', width: 100 },
  { id: 2, name: 'lastName', friendlyName: 'Фамилия', width: 100 },
  { id: 3, name: 'phone', friendlyName: 'телефон', width: 100 },
  { id: 4, name: 'school', friendlyName: 'Школа', width: 100 },
  { id: 5, name: 'event', friendlyName: 'Мероприятие', width: 100 },
];

export function configComparator(a, b) {
  return a.id - b.id;
}