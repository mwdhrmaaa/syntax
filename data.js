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
