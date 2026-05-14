/**
 * Programming languages syntax data
 * Supporting multi-language explanations
 */
export const languages = [
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'JS',
    color: '#f7df1e',
    description: {
        en: 'A high-level, interpreted programming language that conforms to the ECMAScript specification.',
        id: 'Bahasa pemrograman tingkat tinggi yang sesuai dengan spesifikasi ECMAScript.'
    },
    syntax: [
      {
        title: 'Variables',
        code: `// Declaring variables\nlet name = "Antigravity";\nconst version = 1.0;\nvar legacy = true;`,
        explanation: {
            en: 'Use "let" for block-scoped variables, "const" for constants, and "var" for function-scoped (legacy).',
            id: 'Gunakan "let" untuk variabel lingkup blok, "const" untuk konstanta, dan "var" untuk variabel lingkup fungsi (lama).'
        }
      },
      {
        title: 'Functions',
        code: `// Arrow function\nconst greet = (name) => {\n  return \`Hello, \${name}!\`;\n};\n\n// Standard function\nfunction sayHello(name) {\n  console.log("Hello, " + name);\n}`,
        explanation: {
            en: 'Functions are reusable blocks of code. Arrow functions provide a concise syntax.',
            id: 'Fungsi adalah blok kode yang dapat digunakan kembali. Arrow functions memberikan sintaks yang lebih ringkas.'
        }
      }
    ]
  },
  {
    id: 'python',
    name: 'Python',
    icon: 'PY',
    color: '#3776ab',
    description: {
        en: 'An interpreted high-level general-purpose programming language known for readability.',
        id: 'Bahasa pemrograman tingkat tinggi yang dikenal karena keterbacaannya.'
    },
    syntax: [
      {
        title: 'Variables',
        code: `# Declaring variables\nname = "Antigravity"\nversion = 1.0\nis_active = True`,
        explanation: {
            en: 'Python uses dynamic typing. No keywords like let or const are needed.',
            id: 'Python menggunakan pengetikan dinamis. Tidak perlu kata kunci seperti let atau const.'
        }
      },
      {
        title: 'Functions',
        code: `def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("User"))`,
        explanation: {
            en: 'Defined using the "def" keyword. Indentation is used to define blocks.',
            id: 'Didefinisikan menggunakan kata kunci "def". Indentasi digunakan untuk mendefinisikan blok.'
        }
      }
    ]
  },
  {
    id: 'cpp',
    name: 'C++',
    icon: 'C++',
    color: '#00599c',
    description: {
        en: 'A powerful general-purpose programming language used for system/software development.',
        id: 'Bahasa pemrograman serbaguna yang kuat yang digunakan untuk pengembangan sistem/perangkat lunak.'
    },
    syntax: [
      {
        title: 'Hello World',
        code: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}`,
        explanation: {
            en: 'Every C++ program starts with a main function. iostream is used for input/output.',
            id: 'Setiap program C++ dimulai dengan fungsi main. iostream digunakan untuk input/output.'
        }
      },
      {
        title: 'Classes',
        code: `class Player {\npublic:\n    string name;\n    void greet() {\n        cout << "Hi, I am " << name << endl;\n    }\n};`,
        explanation: {
            en: 'C++ is an object-oriented language. Classes define properties and behaviors.',
            id: 'C++ adalah bahasa berorientasi objek. Class mendefinisikan properti dan perilaku.'
        }
      }
    ]
  },
  {
    id: 'java',
    name: 'Java',
    icon: 'JV',
    color: '#ed8b00',
    description: {
        en: 'A high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.',
        id: 'Bahasa pemrograman berorientasi objek tingkat tinggi yang dirancang agar memiliki dependensi implementasi sesedikit mungkin.'
    },
    syntax: [
      {
        title: 'Main Class',
        code: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}`,
        explanation: {
            en: 'Java programs are organized into classes. The main method is the entry point.',
            id: 'Program Java diatur dalam class. Method main adalah titik awal eksekusi.'
        }
      },
      {
        title: 'ArrayList',
        code: `ArrayList<String> cars = new ArrayList<String>();\ncars.add("Volvo");\ncars.get(0);`,
        explanation: {
            en: 'ArrayList is a resizable array implementation in Java.',
            id: 'ArrayList adalah implementasi array yang ukurannya dapat diubah di Java.'
        }
      }
    ]
  },
  {
    id: 'php',
    name: 'PHP',
    icon: 'PHP',
    color: '#777bb4',
    description: {
        en: 'A popular general-purpose scripting language that is especially suited to web development.',
        id: 'Bahasa skrip populer yang sangat cocok untuk pengembangan web.'
    },
    syntax: [
      {
        title: 'Variables',
        code: `<?php\n$name = "Antigravity";\n$age = 25;\necho "Hello " . $name;\n?>`,
        explanation: {
            en: 'PHP variables start with a dollar sign ($). The dot (.) is used for concatenation.',
            id: 'Variabel PHP dimulai dengan tanda dolar ($). Titik (.) digunakan untuk penggabungan string.'
        }
      },
      {
        title: 'Arrays',
        code: `$fruits = array("Apple", "Banana", "Cherry");\n$colors = ["Red", "Green", "Blue"];\necho $fruits[0];`,
        explanation: {
            en: 'Arrays in PHP can be declared using array() or the shorthand [] syntax.',
            id: 'Array di PHP dapat dideklarasikan menggunakan array() atau sintaks [] yang lebih ringkas.'
        }
      }
    ]
  },
  {
    id: 'swift',
    name: 'Swift',
    icon: 'SW',
    color: '#f05138',
    description: {
        en: 'A powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS.',
        id: 'Bahasa pemrograman yang kuat dan intuitif untuk pengembangan aplikasi Apple.'
    },
    syntax: [
      {
        title: 'Constants & Variables',
        code: `let version = 1.0 // Constant\nvar name = "Swift" // Variable\nname = "SwiftUI"`,
        explanation: {
            en: 'Use "let" for constants and "var" for variables.',
            id: 'Gunakan "let" untuk konstanta dan "var" untuk variabel.'
        }
      },
      {
        title: 'Optionals',
        code: `var name: String? = "Antigravity"\nif let unwrappedName = name {\n    print("Hello, \\(unwrappedName)")\n}`,
        explanation: {
            en: 'Optionals handle the absence of a value. "if let" is used for safe unwrapping.',
            id: 'Optionals menangani ketiadaan nilai. "if let" digunakan untuk membuka nilai dengan aman.'
        }
      }
    ]
  },
  {
    id: 'rust',
    name: 'Rust',
    icon: 'RS',
    color: '#dea584',
    description: {
        en: 'A multi-paradigm system programming language focused on safety and performance.',
        id: 'Bahasa pemrograman sistem multi-paradigma yang berfokus pada keamanan dan performa.'
    },
    syntax: [
      {
        title: 'Variables',
        code: `// Immutable by default\nlet x = 5;\n\n// Mutable variable\nlet mut y = 10;\ny = 15;`,
        explanation: {
            en: 'Rust variables are immutable by default. Use "mut" for mutability.',
            id: 'Variabel Rust bersifat tidak dapat diubah (immutable) secara default. Gunakan "mut" untuk mutabilitas.'
        }
      }
    ]
  },
  {
    id: 'go',
    name: 'Go',
    icon: 'GO',
    color: '#00add8',
    description: {
        en: 'An open-source programming language that makes it easy to build simple, reliable, and efficient software.',
        id: 'Bahasa pemrograman sumber terbuka yang memudahkan pembuatan perangkat lunak yang sederhana, andal, dan efisien.'
    },
    syntax: [
      {
        title: 'Concurrency',
        code: `go func() {\n    fmt.Println("Running in background")\n}()`,
        explanation: {
            en: 'The "go" keyword starts a goroutine, which is a lightweight thread managed by the Go runtime.',
            id: 'Kata kunci "go" memulai goroutine, yaitu thread ringan yang dikelola oleh Go runtime.'
        }
      }
    ]
  }
];
