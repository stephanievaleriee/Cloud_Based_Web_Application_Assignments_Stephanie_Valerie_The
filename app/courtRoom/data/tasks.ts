export type Requirement = {
  id: string;
  label: string;
  hint: string;
};

export type Task = {
  id: number;
  title: string;
  background: string;
  requirements: Requirement[];
  starterCode: string;
  validator: (code: string) => boolean;
  punishment: "disability" | "tort" | "bankruptcy";
};

export const tasks: Task[] = [
  {
    id: 1,
    title: "Fix ALT in Image",
    background: "/workdesk.jpeg",
    requirements: [
      { id: "alt", label: "Add alt attribute", hint: "Example: <img src='...' alt='Description'>" },
      { id: "syntax", label: "Ensure correct img tag syntax", hint: "Make sure tag is closed properly." }
    ],
    starterCode: `<img src="cat.png">`,
    validator: (code: string) => {
      return code.includes("alt=") && code.includes("<img");
    },
    punishment: "disability"
  },

  {
    id: 2,
    title: "Fix Input Validation",
    background: "/workdesk.jpeg",
    requirements: [
      { id: "notEmpty", label: "Check for empty input", hint: "Use if (!age)" },
      { id: "isNumber", label: "Validate number input", hint: "Use isNaN(age)" }
    ],
    starterCode:
`function submit() {
  const age = document.getElementById("age").value
  alert("Your age is " + age)
}`,
    validator: (code: string) => {
      return code.includes("isNaN") && code.includes("!");
    },
    punishment: "tort"
  },

  {
    id: 3,
    title: "Fix User Login",
    background: "/workdesk.jpeg",
    requirements: [
      { id: "operator", label: "Fix assignment operator (= → ===)", hint: "Use triple equals ===" },
      { id: "password", label: "Check password correctly", hint: "Add pass === '1234'" }
    ],
    starterCode:
`function login(user, pass) {
  if (user = "admin") {
    return "Logged in"
  }
  return "Wrong"
}`,
    validator: (code: string) => {
      return code.includes("===") && code.includes("1234");
    },
    punishment: "bankruptcy"
  },

  {
    id: 4,
    title: "Secure the Database Query",
    background: "/workdesk.jpeg",
    requirements: [
      { id: "prepared", label: "Use parameterized query (?)", hint: "Use const query = '... WHERE id = ?'" },
      { id: "execute", label: "Pass parameters safely", hint: "Use db.execute(query, [userId])" }
    ],
    starterCode:
`const query = "SELECT * FROM users WHERE id = " + userId;
db.execute(query);`,
    validator: (code: string) => {
      return code.includes("?") && code.includes("[userId]");
    },
    punishment: "tort"
  }
];
