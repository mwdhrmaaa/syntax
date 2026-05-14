/**
 * Programming languages syntax data
 */
export const languages = [
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'JS',
    color: '#f7df1e',
    description: 'A high-level, interpreted programming language that conforms to the ECMAScript specification.',
    syntax: [
      {
        title: 'Variables',
        code: `// Declaring variables\nlet name = "Antigravity";\nconst version = 1.0;\nvar legacy = true;`,
        explanation: 'Use "let" for block-scoped variables, "const" for constants, and "var" for function-scoped (legacy).'
      },
      {
        title: 'Functions',
        code: `// Arrow function\nconst greet = (name) => {\n  return \`Hello, \${name}!\`;\n};\n\n// Standard function\nfunction sayHello(name) {\n  console.log("Hello, " + name);\n}`,
        explanation: 'Functions are reusable blocks of code. Arrow functions provide a concise syntax.'
      },
      {
        title: 'Conditionals',
        code: `if (score >= 90) {\n  console.log("A");\n} else if (score >= 80) {\n  console.log("B");\n} else {\n  console.log("C");\n}`,
        explanation: 'Conditionals control the flow of execution based on boolean logic.'
      }
    ]
  },
  {
    id: 'python',
    name: 'Python',
    icon: 'PY',
    color: '#3776ab',
    description: 'An interpreted high-level general-purpose programming language known for readability.',
    syntax: [
      {
        title: 'Variables',
        code: `# Declaring variables\nname = "Antigravity"\nversion = 1.0\nis_active = True`,
        explanation: 'Python uses dynamic typing. No keywords like let or const are needed.'
      },
      {
        title: 'Functions',
        code: `def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("User"))`,
        explanation: 'Defined using the "def" keyword. Indentation is used to define blocks.'
      },
      {
        title: 'Lists',
        code: `fruits = ["apple", "banana", "cherry"]\nfruits.append("orange")\nprint(fruits[0])`,
        explanation: 'Lists are ordered, changeable, and allow duplicate values.'
      }
    ]
  },
  {
    id: 'rust',
    name: 'Rust',
    icon: 'RS',
    color: '#dea584',
    description: 'A multi-paradigm system programming language focused on safety and performance.',
    syntax: [
      {
        title: 'Variables',
        code: `// Immutable by default\nlet x = 5;\n\n// Mutable variable\nlet mut y = 10;\ny = 15;`,
        explanation: 'Rust variables are immutable by default. Use "mut" for mutability.'
      },
      {
        title: 'Functions',
        code: `fn greet(name: &str) -> String {\n    format!("Hello, {}!", name)\n}\n\nfn main() {\n    println!("{}", greet("User"));\n}`,
        explanation: 'Defined with "fn". Types must be specified for parameters and return values.'
      }
    ]
  },
  {
    id: 'go',
    name: 'Go',
    icon: 'GO',
    color: '#00add8',
    description: 'An open-source programming language that makes it easy to build simple, reliable, and efficient software.',
    syntax: [
      {
        title: 'Variables',
        code: `// Long way\nvar name string = "Antigravity"\n\n// Short way (inside functions)\nversion := 1.0`,
        explanation: 'Go is statically typed. The ":=" syntax is a shorthand for declaring and initializing.'
      },
      {
        title: 'Concurrency',
        code: `go func() {\n    fmt.Println("Running in background")\n}()`,
        explanation: 'The "go" keyword starts a goroutine, which is a lightweight thread managed by the Go runtime.'
      }
    ]
  },
  {
    id: 'cpp',
    name: 'C++',
    icon: 'C++',
    color: '#00599c',
    description: 'A powerful general-purpose programming language used for system/software development.',
    syntax: [
      {
        title: 'Hello World',
        code: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}`,
        explanation: 'Every C++ program starts with a main function. iostream is used for input/output.'
      },
      {
        title: 'Classes',
        code: `class Player {\npublic:\n    string name;\n    void greet() {\n        cout << "Hi, I am " << name << endl;\n    }\n};`,
        explanation: 'C++ is an object-oriented language. Classes define properties and behaviors.'
      }
    ]
  }
];
