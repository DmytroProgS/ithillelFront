function Student(name, lastName, birthYear, arrayScore) {
     this.name = name;
     this.lastName = lastName;
     this.birthYear = birthYear;
     this.arrayScore = arrayScore;
     this.arrayAttendance = new Array(25).fill(null);
 
     this.getStudentAge = () => {
         const currentYear = new Date().getFullYear();
         return currentYear - this.birthYear;
     };
 
     this.getAverageScore = () => {
         const totalScore = this.arrayScore.reduce((sum, score) => sum + score, 0);
         return totalScore / this.arrayScore.length;
     };
 
     this.present = () => {
         const index = this.arrayAttendance.indexOf(null);
         if (index !== -1) {
             this.arrayAttendance[index] = true;
         }
     };
 
     this.absent = () => {
         const index = this.arrayAttendance.indexOf(null);
         if (index !== -1) {
             this.arrayAttendance[index] = false;
         }
     };
 
     this.summary = () => {
         const averageScore = this.getAverageScore();
         const attendanceCount = this.arrayAttendance.filter(a => a === true).length;
         const attendanceRate = attendanceCount / this.arrayAttendance.length;
 
         if (averageScore > 90 && attendanceRate > 0.9) {
             return "Молодець!";
         } else if (averageScore > 90 || attendanceRate > 0.9) {
             return "Добре, але можна краще";
         } else {
             return "Редиска!";
         }
     };
 }
 

 const student1 = new Student("Дмитро", "Філатов", 1988, [95, 90, 92, 92, 88]);
 const student2 = new Student("Ганна", "Хтось", 1999, [75, 80, 82, 78, 74]);
 

 console.log(`Вік: ${student1.getStudentAge()}`);
 console.log(`Середній бал: ${student1.getAverageScore()}`);
 student1.present();
 student1.present();
 student1.present();
 student1.present();
 student1.present();
 student1.present();
 student1.present();
 student1.present();
 student1.present();
 student1.present();
 student1.present();
 student1.present();
 student1.present();
 student1.present();
 student1.present();
 student1.present();
 student1.present();
 student1.present();
 student1.present();
 student1.present();
 student1.present();
 student1.present();
 student1.present();
 student1.present();
 student1.present();
 console.log(`Відвідуваність: ${student1.arrayAttendance}`);
 console.log(`Summary: ${student1.summary()}`);
 

 console.log(`Вік: ${student2.getStudentAge()}`);
 console.log(`Середній бал: ${student2.getAverageScore()}`);
 student2.present();
 student2.present();
 student2.absent();
 console.log(`Відвідуваність: ${student2.arrayAttendance}`);
 console.log(`Summary: ${student2.summary()}`);
 