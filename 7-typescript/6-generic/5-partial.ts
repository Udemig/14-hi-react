/*
 * Aşağıdaki tipler Typescript içerisinde varsayılan olarak bulunur:
 
 ! Partial
 * Generic olarak aldığı nesnenin tüm özelliklerini opsiyonel yapar
  
 ! Required
 * Generic olarak aldığı nesnenin tüm özelliklerini zorunlu yapar

 ! Readonly
 * Parametre olarak aldığı nesnenin tüm özelliklerini sadece okunabilir yapar
*/

type User = {
  username: string;
  password: string;
  age: number;
};

type User2 = {
  username?: string;
  age?: number;
  password?: string;
};

const createUser = (data: Required<User2>) => {
  // axios.post()
};

const updateUser = (data: Partial<User>) => {
  // axios.patch()
};

createUser({ username: "Faruk", password: "12345", age: 23 });
updateUser({ age: 24 });

const x: Readonly<User> = {
  username: "ali",
  age: 23,
  password: "deneme123",
};
