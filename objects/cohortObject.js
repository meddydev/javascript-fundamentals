const cohort = {
  name: "June2022",
  id: 1234,
  students: ["Ahmed", "Karolina", "Shaun", "Tay"],
};

const cohortInfo = () => {
  console.log(
    `${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`
  );
};

cohortInfo();
