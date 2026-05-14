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
        code: `let name = "Antigravity";\nconst version = 1.0;\nvar legacy = true;`,
        explanation: {
            en: 'Use "let" for block-scoped variables, "const" for constants, and "var" for function-scoped (legacy).',
            id: 'Gunakan "let" untuk variabel lingkup blok, "const" untuk konstanta, dan "var" untuk variabel lingkup fungsi (lama).'
        }
      },
      {
        title: 'Functions',
        code: `const greet = (name) => {\n  return \`Hello, \${name}!\`;\n};\n\nfunction sayHello(name) {\n  console.log("Hello, " + name);\n}`,
        explanation: {
            en: 'Functions are reusable blocks of code. Arrow functions provide a concise syntax.',
            id: 'Fungsi adalah blok kode yang dapat digunakan kembali. Arrow functions memberikan sintaks yang lebih ringkas.'
        }
      },
      {
        title: 'Conditionals',
        code: `if (score >= 90) {\n  console.log("Grade: A");\n} else {\n  console.log("Grade: B");\n}`,
        explanation: {
            en: 'Standard if-else block for conditional logic.',
            id: 'Blok if-else standar untuk logika kondisional.'
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
        code: `name = "Antigravity"\nversion = 1.0\nis_active = True`,
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
      },
      {
        title: 'Loops',
        code: `for i in range(5):\n    print(i)\n\nwhile active:\n    do_something()`,
        explanation: {
            en: 'Iterate over ranges or check conditions with for and while loops.',
            id: 'Iterasi melalui rentang atau periksa kondisi dengan loop for dan while.'
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
        en: 'A high-level, class-based, object-oriented programming language.',
        id: 'Bahasa pemrograman berorientasi objek tingkat tinggi.'
    },
    syntax: [
      {
        title: 'Main Class',
        code: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}`,
        explanation: {
            en: 'Java programs are organized into classes. The main method is the entry point.',
            id: 'Program Java diatur dalam class. Method main adalah titik awal eksekusi.'
        }
      }
    ]
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: 'TS',
    color: '#3178c6',
    description: {
        en: 'A strongly typed programming language that builds on JavaScript.',
        id: 'Bahasa pemrograman dengan pengetikan kuat yang dibangun di atas JavaScript.'
    },
    syntax: [
      {
        title: 'Interfaces',
        code: `interface User {\n    name: string;\n    id: number;\n}\n\nconst user: User = {\n    name: "Antigravity",\n    id: 1\n};`,
        explanation: {
            en: 'Interfaces define the shape of an object, providing better type safety.',
            id: 'Interface mendefinisikan bentuk objek, memberikan keamanan tipe yang lebih baik.'
        }
      },
      {
        title: 'Type Aliases',
        code: `type Status = "active" | "inactive";\nlet currentStatus: Status = "active";`,
        explanation: {
            en: 'Type aliases allow creating custom names for types.',
            id: 'Type alias memungkinkan pembuatan nama kustom untuk tipe data.'
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
        en: 'A popular general-purpose scripting language suited to web development.',
        id: 'Bahasa skrip populer yang cocok untuk pengembangan web.'
    },
    syntax: [
      {
        title: 'Variables',
        code: `<?php\n$name = "Antigravity";\necho "Hello " . $name;\n?>`,
        explanation: {
            en: 'PHP variables start with a dollar sign ($).',
            id: 'Variabel PHP dimulai dengan tanda dolar ($).'
        }
      }
    ]
  },
  {
    id: 'csharp',
    name: 'C#',
    icon: 'C#',
    color: '#178600',
    description: {
        en: 'A modern, object-oriented programming language from Microsoft.',
        id: 'Bahasa pemrograman berorientasi objek modern dari Microsoft.'
    },
    syntax: [
      {
        title: 'Hello World',
        code: `using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, C#!");\n    }\n}`,
        explanation: {
            en: 'C# uses the .NET framework. Main is the entry point.',
            id: 'C# menggunakan framework .NET. Main adalah titik awal eksekusi.'
        }
      }
    ]
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    icon: 'KT',
    color: '#7f52ff',
    description: {
        en: 'A modern programming language that makes developers happier.',
        id: 'Bahasa pemrograman modern yang membuat pengembang lebih bahagia.'
    },
    syntax: [
      {
        title: 'Variables',
        code: `val name = "Antigravity" // Read-only\nvar age = 25 // Mutable`,
        explanation: {
            en: 'Use "val" for read-only variables and "var" for mutable ones.',
            id: 'Gunakan "val" untuk variabel read-only dan "var" untuk variabel mutable.'
        }
      },
      {
        title: 'Data Classes',
        code: `data class User(val name: String, val id: Int)`,
        explanation: {
            en: 'Data classes automatically generate getters, setters, and other utility methods.',
            id: 'Data class secara otomatis menghasilkan getter, setter, dan metode utilitas lainnya.'
        }
      }
    ]
  },
  {
    id: 'ruby',
    name: 'Ruby',
    icon: 'RB',
    color: '#701516',
    description: {
        en: 'A dynamic, open source programming language with a focus on simplicity and productivity.',
        id: 'Bahasa pemrograman dinamis sumber terbuka dengan fokus pada kesederhanaan dan produktivitas.'
    },
    syntax: [
      {
        title: 'Methods',
        code: `def greet(name)\n  puts "Hello, #{name}!"\nend\n\ngreet("Ruby")`,
        explanation: {
            en: 'Methods are defined with "def" and ended with "end". String interpolation uses #{}',
            id: 'Metode didefinisikan dengan "def" dan diakhiri dengan "end". Interpolasi string menggunakan #{}'
        }
      }
    ]
  },
  {
    id: 'sql',
    name: 'SQL',
    icon: 'SQL',
    color: '#336791',
    description: {
        en: 'Standard language for storing, manipulating and retrieving data in databases.',
        id: 'Bahasa standar untuk menyimpan, memanipulasi, dan mengambil data dalam database.'
    },
    syntax: [
      {
        title: 'SELECT Statement',
        code: `SELECT name, email\nFROM users\nWHERE status = 'active'\nORDER BY created_at DESC;`,
        explanation: {
            en: 'Retrieves specific columns from a table with conditions and ordering.',
            id: 'Mengambil kolom tertentu dari tabel dengan kondisi dan pengurutan.'
        }
      },
      {
        title: 'JOIN',
        code: `SELECT users.name, orders.amount\nFROM users\nINNER JOIN orders ON users.id = orders.user_id;`,
        explanation: {
            en: 'Combines rows from two or more tables based on a related column.',
            id: 'Menggabungkan baris dari dua atau lebih tabel berdasarkan kolom terkait.'
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
        en: 'A powerful and intuitive programming language for Apple platforms.',
        id: 'Bahasa pemrograman yang kuat dan intuitif untuk platform Apple.'
    },
    syntax: [
      {
        title: 'Constants',
        code: `let version = 1.0\nvar name = "Swift"`,
        explanation: {
            en: 'Use "let" for constants and "var" for variables.',
            id: 'Gunakan "let" untuk konstanta dan "var" untuk variabel.'
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
        en: 'A language focused on safety and performance.',
        id: 'Bahasa yang berfokus pada keamanan dan performa.'
    },
    syntax: [
      {
        title: 'Ownership',
        code: `let s1 = String::from("hello");\nlet s2 = s1; // s1 is moved here`,
        explanation: {
            en: 'Rust unique ownership system ensures memory safety without a garbage collector.',
            id: 'Sistem kepemilikan unik Rust memastikan keamanan memori tanpa garbage collector.'
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
        en: 'A simple, reliable, and efficient language.',
        id: 'Bahasa yang sederhana, andal, dan efisien.'
    },
    syntax: [
      {
        title: 'Structs',
        code: `type User struct {\n    Name string\n    Age  int\n}\n\nu := User{Name: "Go", Age: 10}`,
        explanation: {
            en: 'Structs are typed collections of fields, used to group data together.',
            id: 'Struct adalah kumpulan field bertipe, digunakan untuk mengelompokkan data.'
        }
      }
    ]
  }
];
