

const StudentList = () => {
  // Sample data for demonstration
  const studentData = [
    { id: 1, name: 'Omar Abdullah', scores: 'A+', percentage: '99%', class: 'Class One', image:"../../src/assets/01.png" },
    { id: 2, name: 'Kalam', scores: 'A+', percentage: '100%', class: 'Class One', image:"../../src/assets/02.png" },
    { id: 3, name: 'Limon', scores: 'A+', percentage: '98%', class: 'Class One', image:"../../src/assets/3.png" },
    { id: 4, name: 'Redwan', scores: 'A', percentage: '90%', class: 'Class One', image:"../../src/assets/4.jpeg" },
    { id: 5, name: 'Shoan', scores: 'A-', percentage: '70%', class: 'Class One', image:"../../src/assets/5.jpeg" },
    { id: 6, name: 'Al-Amin', scores: 'A', percentage: '85%', class: 'Class One', image:"../../src/assets/6.jpeg" },
    { id: 7, name: 'Rifat', scores: 'B', percentage: '65%', class: 'Class One', image:"../../src/assets/7.jpeg" },
    { id: 8, name: 'Farhan', scores: 'A', percentage: '80%', class: 'Class One', image:"../../src/assets/8.png" },
    { id: 9, name: 'Hasnine', scores: 'A+', percentage: '98%', class: 'Class One', image:"../../src/assets/9.jpeg" },
    { id: 10, name: 'Shakil', scores: 'A+', percentage: '90%', class: 'Class One', image:"../../src/assets/10.jpeg" },


    { id: 11, name: 'Asash', scores: 'A-', percentage: '87%', class: 'Class Two',image:"../../src/assets/11.png" },
    { id: 12, name: 'Obaidul', scores: 'B', percentage: '54%', class: 'Class Two',image:"../../src/assets/12.png" },
    { id: 13, name: 'Tugril', scores: 'A', percentage: '74%', class: 'Class Two',image:"../../src/assets/13.jpeg" },
    { id: 14, name: 'Rahat', scores: 'c', percentage: '44%', class: 'Class Two',image:"../../src/assets/14.png" },
    { id: 15, name: 'Arman', scores: 'D', percentage: '34%', class: 'Class Two',image:"../../src/assets/15.png" },
    { id: 16, name: 'Sourov', scores: 'A', percentage: '94%', class: 'Class Two',image:"../../src/assets/16.png" },
    { id: 17, name: 'Riazul', scores: 'A+', percentage: '96%', class: 'Class Two',image:"../../src/assets/17.png" },
    { id: 18, name: 'Shaon', scores: 'D', percentage: '34%', class: 'Class Two',image:"../../src/assets/18.jpeg" },
    { id: 19, name: 'Mohidul', scores: 'A', percentage: '77%', class: 'Class Two',image:"../../src/assets/20.jpeg" },
    { id: 20, name: 'Rana', scores: 'A', percentage: '94%', class: 'Class Two',image:"../../src/assets/20.jpeg" },
    { id: 21, name: 'Tamim', scores: 'A', percentage: '76%', class: 'Class Three',image:"../../src/assets/5.jpeg" },
    { id: 22, name: 'Sabbir', scores: 'A-', percentage: '79%', class: 'Class Three',image:"../../src/assets/15.png" },
    { id: 23, name: 'Shakib', scores: 'B+', percentage: '89%', class: 'Class Three',image:"../../src/assets/9.jpeg" },
    { id: 24, name: 'Liton', scores: 'B+', percentage: '69%', class: 'Class Three',image:"../../src/assets/18.jpeg" },
    { id: 25, name: 'Afif', scores: 'C', percentage: '39%', class: 'Class Three',image:"../../src/assets/8.png" },
    { id: 26, name: 'Santo', scores: 'A+', percentage: '94%', class: 'Class Three',image:"../../src/assets/02.png" },
    { id: 27, name: 'Musfik', scores: 'B-', percentage: '46%', class: 'Class Three',image:"../../src/assets/12.png" },
    { id: 28, name: 'Mashrafi', scores: 'A+', percentage: '93%', class: 'Class Three',image:"../../src/assets/7.jpeg" },
    { id: 29, name: 'San', scores: 'A+', percentage: '99%', class: 'Class Three',image:"../../src/assets/01.png" },
    { id: 30, name: 'Rezvi', scores: 'A+', percentage: '99%', class: 'Class Three',image:"../../src/assets/01.png" },
  ];

  // Group students by class
  const groupedStudents = studentData.reduce((acc, student) => {
    acc[student.class] = acc[student.class] || [];
    acc[student.class].push(student);
    return acc;
  }, {});

  return (
    <section className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="container">
        {Object.keys(groupedStudents).map((className) => (
          <div key={className} className="mb-16">
            <h2 className="bg-white/5 p-5 text-sm md:text-xl">
              <span >{className}</span>
            </h2>
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#FFFFFF0D]">
                  <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                    ID
                  </th>
                  <th className="p-5 text-sm md:text-xl font-semibold text-left">
                    Name
                  </th>
                  <th className="p-5 text-sm md:text-xl font-semibold">
                    Scores
                  </th>
                  <th className="p-5 text-sm md:text-xl font-semibold">
                    Percentage
                  </th>
                </tr>
              </thead>
              <tbody>
                {groupedStudents[className].map((student) => (
                  <tr key={student.id} className="border-b border-[#7ECEB529]">
                    <td className="p-5 text-sm md:text-xl">{student.id}</td>
                    <td className="p-5 text-sm md:text-xl">
                      <div className="flex space-x-3 items-center">
                        <img
                          className="w-8 h-8"
                          src={student.image}
                          width="32"
                          height="32"
                          alt={student.name}
                        />
                        <span className="whitespace-nowrap">{student.name}</span>
                      </div>
                    </td>
                    <td className="p-5 text-sm md:text-xl text-center">
                      {student.scores}
                    </td>
                    <td className="p-5 text-sm md:text-xl text-center">
                      {student.percentage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudentList;
