   
        // 1. Disable Right-Click Context Menu
        document.addEventListener('contextmenu', event => event.preventDefault());

        // 2. Disable common DevTools keyboard shortcuts (Windows & Mac)
        document.addEventListener('keydown', function (event) {
            if (
                event.key === 'F12' ||
                (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J' || event.key === 'C')) ||
                (event.ctrlKey && event.key === 'U') || // Block view source
                (event.metaKey && event.altKey && (event.key === 'I' || event.key === 'J' || event.key === 'U'))
            ) {
                event.preventDefault();
                return false;
            }
        });

        // 3. Anti-Debugging / DevTools Freeze Trap
        // Triggers infinite breakpoints if DevTools is forcibly opened, rendering it unusable.
        (function() {
            const blockDevTools = function() {
                setInterval(function() {
                    Function('debugger')();
                }, 50);
            };
            try {
                blockDevTools();
            } catch (err) {}
        })();

        
        // Global Data Array populated with 201 provided questions
        window.globalQuestionsBank = [
            { id: '1', category: 'Computer Fundamentals', q: 'Which type of computer works with continuous data?', options: ['Digital', 'Analog', 'Hybrid', 'Super'], a: 1 },
            { id: '2', category: 'Computer Fundamentals', q: 'Hybrid computer is a combination of:', options: ['Analog + Mechanical', 'Digital + Mechanical', 'Analog + Digital', 'Super + Mini'], a: 2 },
            { id: '3', category: 'Computer Fundamentals', q: 'Which of the following is an example of a hybrid computer?', options: ['Calculator', 'ECG machine', 'Abacus', 'Laptop'], a: 1 },
            { id: '4', category: 'Computer Fundamentals', q: 'Which of the following is a special-purpose computer?', options: ['Desktop', 'Laptop', 'ATM', 'Tablet'], a: 2 },
            { id: '5', category: 'Computer Fundamentals', q: 'Which computer is used in large organizations for bulk data processing?', options: ['Micro', 'Mini', 'Mainframe', 'Hybrid'], a: 2 },
            { id: '6', category: 'Computer Fundamentals', q: 'Which computer is more powerful than micro but less than mainframe?', options: ['Super', 'Mini', 'Analog', 'Hybrid'], a: 1 },
            { id: '7', category: 'Computer Fundamentals', q: 'Which computer is mainly used for scientific research and space applications?', options: ['Micro', 'Mini', 'Mainframe', 'Supercomputer'], a: 3 },
            { id: '8', category: 'Computer Fundamentals', q: 'Which of the following is a multi-user system?', options: ['Laptop', 'Desktop', 'Mainframe', 'Tablet'], a: 2 },
            { id: '9', category: 'Computer Fundamentals', q: 'An embedded computer is:', options: ['A supercomputer', 'A computer inside another device', 'A personal computer', 'A large system'], a: 1 },
            { id: '10', category: 'Computer Fundamentals', q: 'Embedded systems are commonly found in:', options: ['Only computers', 'Only offices', 'Electronic device', 'Books'], a: 2 },
            { id: '11', category: 'Computer Fundamentals', q: 'The Abacus is mainly used for:', options: ['Multiplication only', 'Division only', 'Addition and Subtraction', 'ALL'], a: 2 },
            { id: '12', category: 'Computer Fundamentals', q: 'The Analytical Engine was developed in:', options: ['1822', '1833', '1840', '1855'], a: 1 },
            { id: '13', category: 'Computer Fundamentals', q: 'Computer is an ___ device.', options: ['Mechanical', 'Electrical', 'Electronic', 'Manual'], a: 2 },
            { id: '14', category: 'Computer Fundamentals', q: 'Which of the following is NOT a function of a computer?', options: ['Input', 'Processing', 'Thinking', 'Output'], a: 2 },
            { id: '15', category: 'Computer Fundamentals', q: 'GIGO stands for:', options: ['Good Input Good Output', 'Garbage In Garbage Out', 'General Input General Output', 'Global Input Global Output'], a: 1 },
            { id: '16', category: 'Computer Fundamentals', q: 'PCI slots are used to connect:', options: ['Expansion cards', 'USB devices', 'Hard disks', 'RAM chips'], a: 0 },
            { id: '17', category: 'Computer Fundamentals', q: 'What does UPS stand for?', options: ['Unlimited Power Supply', 'Unused Power System', 'Uninterrupted Power Supply', 'Universal Processing System'], a: 2 },
            { id: '18', category: 'Computer Fundamentals', q: 'What is the correct sequence of data processing?', options: ['Process → Data → Information', 'Data → Process → Information', 'Information → Data → Process', 'Data → Information → Process'], a: 1 },
            { id: '19', category: 'Computer Fundamentals', q: 'What is the correct sequence of basic operations in a computer?', options: ['Output → Process → Input', 'Input → Output → Process', 'Input → Process → Output', 'Process → Input → Output'], a: 2 },
            { id: '20', category: 'Computer Fundamentals', q: 'What is the full form of BIOS?', options: ['Basic Input Output System', 'Binary Input Output System', 'Basic Internal Output Software', 'Binary Integrated Operating System'], a: 0 },
            { id: '21', category: 'Computer Fundamentals', q: 'What is the function of the BIOS in a computer?', options: ['Controls printing', 'Manages documents', 'Starts the computer and loads OS', 'Acts as an antivirus'], a: 2 },
            { id: '22', category: 'Computer Fundamentals', q: 'What is the full form of CMOS?', options: ['Central Memory On System', 'Computer Machine Output System', 'Complementary Metal-Oxide Semiconductor', 'Component Memory Of Software'], a: 2 },
            { id: '23', category: 'Computer Fundamentals', q: 'A GPU is mainly used for:', options: ['Word Processing', 'Audio Recording', 'Image and Video processing', 'Typing'], a: 2 },
            { id: '24', category: 'Computer Fundamentals', q: 'Which component is responsible for cooling the CPU?', options: ['UPS', 'Fan', 'GPU', 'Heat Sink'], a: 3 },
            { id: '25', category: 'Computer Fundamentals', q: 'First generation computers used:', options: ['Transistors', 'Vacuum tubes', 'IC', 'Microprocessor'], a: 1 },
            { id: '26', category: 'Computer Fundamentals', q: 'The period of first generation computers is:', options: ['1956-1963', '1940-1956', '1964-1971', '1971-Present'], a: 1 },
            { id: '27', category: 'Computer Fundamentals', q: 'Which language was used in first generation computers?', options: ['High-level language', 'Assembly language', 'Machine language', 'Java'], a: 2 },
            { id: '28', category: 'Computer Fundamentals', q: 'Second generation computers used:', options: ['Vacuum tubes', 'Transistors', 'IC', 'Microprocessor'], a: 1 },
            { id: '29', category: 'Computer Fundamentals', q: 'Which language was introduced in second generation?', options: ['Machine', 'Binary', 'High-level', 'Assembly'], a: 3 },
            { id: '30', category: 'Computer Fundamentals', q: 'Third generation computers used:', options: ['Transistors', 'IC', 'Vacuum tubes', 'Microprocessor'], a: 1 },
            { id: '31', category: 'Computer Fundamentals', q: 'Which language was commonly used in third generation?', options: ['Machine', 'Assembly', 'High-level lang', 'Binary'], a: 2 },
            { id: '32', category: 'Computer Fundamentals', q: 'Fourth generation computers use:', options: ['IC', 'Vacuum tube', 'Microprocessor', 'Transistor'], a: 2 },
            { id: '33', category: 'Computer Fundamentals', q: 'Fifth generation computers are based on:', options: ['Vacuum tube', 'Transistor', 'IC', 'ULSI'], a: 3 },
            { id: '34', category: 'Computer Fundamentals', q: 'Which is a major feature of fourth generation?', options: ['Manual operation', 'No OS', 'Personal computers', 'No storage'], a: 2 },
            { id: '35', category: 'Computer Fundamentals', q: 'CPU stands for:', options: ['Central Program Unit', 'Central Processing Unit', 'Control Processing Unit', 'Computer Processing Unit'], a: 1 },
            { id: '36', category: 'Computer Fundamentals', q: 'CPU is also known as:', options: ['Brain of computer', 'Heart of computer', 'Memory unit', 'Storage device'], a: 0 },
            { id: '37', category: 'Computer Fundamentals', q: 'CPU is also known as:', options: ['Brain of computer', 'Heart of computer', 'Memory unit', 'Both A & B'], a: 0 },
            { id: '38', category: 'Computer Fundamentals', q: 'Which unit performs arithmetic and logical operations?', options: ['Control Unit', 'Memory Unit', 'ALU', 'Input Unit'], a: 2 },
            { id: '39', category: 'Computer Fundamentals', q: 'Control Unit is responsible for:', options: ['Calculations', 'Storing data', 'Directing operations', 'Input'], a: 2 },
            { id: '40', category: 'Computer Fundamentals', q: 'Which of the following is NOT a component of CPU?', options: ['ALU', 'Control Unit', 'Register', 'Mouse'], a: 3 },
            { id: '41', category: 'Computer Fundamentals', q: 'Clock speed is measured in:', options: ['Bytes', 'Hertz', 'Bits', 'Seconds'], a: 1 },
            { id: '42', category: 'Computer Fundamentals', q: 'Which unit is commonly used for modern CPU speed?', options: ['KB', 'MB', 'GHz', 'GB'], a: 2 },
            { id: '43', category: 'Computer Fundamentals', q: 'A bus is used for:', options: ['Storage', 'Data transfer', 'Calculation', 'Printing'], a: 1 },
            { id: '44', category: 'Computer Fundamentals', q: 'Higher clock speed means:', options: ['Less performance', 'Slower computer', 'Faster processing', 'No change'], a: 2 },
            { id: '45', category: 'Computer Fundamentals', q: 'Which bus carries actual data?', options: ['Address Bus', 'Control Bus', 'Data Bus', 'External Bus'], a: 2 },
            { id: '46', category: 'Computer Fundamentals', q: 'Which bus carries memory address?', options: ['Data Bus', 'Address Bus', 'Control Bus', 'External Bus'], a: 1 },
            { id: '47', category: 'Computer Fundamentals', q: 'Which bus carries control signals?', options: ['Data Bus', 'Address Bus', 'Control Bus', 'External Bus'], a: 2 },
            { id: '48', category: 'Computer Fundamentals', q: 'Address bus is:', options: ['Bidirectional', 'Unidirectional', 'Both', 'None'], a: 1 },
            { id: '49', category: 'Computer Fundamentals', q: 'Data bus is:', options: ['Unidirectional', 'Bidirectional', 'Only output', 'Only input'], a: 1 },
            { id: '50', category: 'Computer Fundamentals', q: 'Which combination is correct?', options: ['Data Bus → Address', 'Address Bus → Data', 'Control Bus → Signals', 'ALU → Storage'], a: 2 },
            { id: '51', category: 'Computer Fundamentals', q: 'Which unit interprets instructions?', options: ['ALU', 'CU', 'RAM', 'ROM'], a: 1 },
            { id: '52', category: 'Computer Fundamentals', q: 'Which unit performs logical comparison?', options: ['CU', 'ALU', 'Memory', 'Input'], a: 1 },
            { id: '53', category: 'Computer Fundamentals', q: 'Which terminal depends completely on a central computer?', options: ['Smart terminal', 'Dumb terminal', 'Hybrid computer', 'Microcomputer'], a: 1 },
            { id: '54', category: 'Computer Fundamentals', q: 'Which device is an example of a dumb terminal?', options: ['Personal computer', 'ATM machine', 'Monitor with keyboard', 'Laptop'], a: 2 },
            { id: '55', category: 'Computer Fundamentals', q: 'Smart terminals reduce load on:', options: ['User', 'CPU', 'Main computer', 'Monitor'], a: 2 },
            { id: '56', category: 'Software & OS', q: 'Which software is used for typing documents?', options: ['Spreadsheet', 'Word Processor', 'Database', 'Browser'], a: 1 },
            { id: '57', category: 'Software & OS', q: 'Spreadsheet software is mainly used for:', options: ['Drawing', 'Calculation', 'Browsing', 'Email'], a: 1 },
            { id: '58', category: 'Software & OS', q: 'Multimedia software is used for:', options: ['Calculation', 'Text editing', 'Audio and video', 'Networking'], a: 2 },
            { id: '59', category: 'Software & OS', q: 'Antivirus software is used to:', options: ['Increase speed', 'Protect from viruses', 'Delete files', 'Browse internet'], a: 1 },
            { id: '60', category: 'Software & OS', q: 'Disk Cleanup is used to:', options: ['Increase RAM', 'Scan virus', 'Install software', 'Remove unnecessary files'], a: 3 },
            { id: '61', category: 'Software & OS', q: 'Which utility helps in organizing files?', options: ['Antivirus', 'File Management', 'Disk Cleanup', 'Firewall'], a: 1 },
            { id: '62', category: 'Software & OS', q: 'Disk Defragmenter is used to:', options: ['Delete files', 'Arrange fragmented data', 'Compress files', 'Scan virus'], a: 1 },
            { id: '63', category: 'Software & OS', q: 'Compression software is used to:', options: ['Increase file size', 'Delete file', 'Reduce file size', 'Scan file'], a: 2 },
            { id: '64', category: 'Software & OS', q: 'Backup software is used to:', options: ['Delete data', 'Save duplicate copy', 'Edit data', 'Compress data'], a: 1 },
            { id: '65', category: 'Software & OS', q: 'Uninstaller is used to:', options: ['Install software', 'Compress file', 'Scan virus', 'Remove software'], a: 3 },
            { id: '66', category: 'Software & OS', q: 'Which translator checks the entire program at once?', options: ['Interpreter', 'Compiler', 'Assembler', 'Loader'], a: 1 },
            { id: '67', category: 'Software & OS', q: 'Assembler converts:', options: ['Machine → High-level', 'High-level → Machine', 'Assembly → Machine', 'Binary → English'], a: 2 },
            { id: '68', category: 'Software & OS', q: 'Which translator executes program line by line?', options: ['Compiler', 'Interpreter', 'Assembler', 'Linker'], a: 1 },
            { id: '69', category: 'Software & OS', q: 'Which translator stops execution when an error occurs?', options: ['Compiler', 'Linker', 'Assembler', 'Interpreter'], a: 3 },
            { id: '70', category: 'Software & OS', q: 'Which translator gives error after checking the whole program?', options: ['Interpreter', 'Compiler', 'Assembler', 'Loader'], a: 1 },
            { id: '71', category: 'Software & OS', q: 'Device driver is a type of:', options: ['Application software', 'Utility software', 'System software', 'Translator'], a: 2 },
            { id: '72', category: 'Software & OS', q: 'Which of the following is fastest in program execution (after translation)?', options: ['Interpreter', 'Compiler', 'Assembler', 'None'], a: 1 },
            { id: '73', category: 'Software & OS', q: 'Which device requires a driver?', options: ['Keyboard', 'Printer', 'Scanner', 'All of these'], a: 3 },
            { id: '74', category: 'Software & OS', q: 'Which of the following is NOT a function of device driver?', options: ['Hardware communication', 'Device control', 'Program translation', 'Data transfer'], a: 2 },
            { id: '75', category: 'Software & OS', q: 'Operating System is a:', options: ['Hardware', 'Application software', 'System software', 'Utility'], a: 2 },
            { id: '76', category: 'Software & OS', q: 'OS acts as an interface between:', options: ['User and hardware', 'CPU and memory', 'Input and output', 'Software and data'], a: 0 },
            { id: '77', category: 'Software & OS', q: 'Which of the following is an example of OS?', options: ['MS Word', 'Windows', 'Excel', 'Chrome'], a: 1 },
            { id: '78', category: 'Software & OS', q: 'Which function is performed by OS?', options: ['Typing documents', 'Managing memory', 'Drawing images', 'Playing games'], a: 1 },
            { id: '79', category: 'Software & OS', q: 'Which OS function manages CPU usage?', options: ['File management', 'Process management', 'Memory management', 'Device management'], a: 1 },
            { id: '80', category: 'Software & OS', q: 'Batch Operating System processes:', options: ['One task at a time', 'Tasks in groups', 'Real-time tasks', 'Interactive tasks'], a: 1 },
            { id: '81', category: 'Software & OS', q: 'Single-user OS supports:', options: ['Many users', 'One user', 'No user', 'Multiple CPUs'], a: 1 },
            { id: '82', category: 'Software & OS', q: 'Multi-user OS allows:', options: ['One task', 'One user', 'Many users simultaneously', 'No users'], a: 2 },
            { id: '83', category: 'Software & OS', q: 'Multiprocessor OS uses:', options: ['One CPU', 'Multiple tasks', 'Multiple users', 'Multiple CPUs'], a: 3 },
            { id: '84', category: 'Software & OS', q: 'Multitasking OS allows:', options: ['One task', 'Multiple tasks', 'No task', 'Only OS'], a: 1 },
            { id: '85', category: 'Software & OS', q: 'Multithreading means:', options: ['Multiple users', 'Multiple CPUs', 'Multiple steps', 'Multiple OS'], a: 2 },
            { id: '86', category: 'Software & OS', q: 'Embedded OS is used in:', options: ['Desktop', 'Mobile apps', 'Special devices', 'Browsers'], a: 2 },
            { id: '87', category: 'Software & OS', q: 'Booting means:', options: ['Turning off computer', 'Starting computer', 'Restarting computer', 'Saving data'], a: 1 },
            { id: '88', category: 'Software & OS', q: 'Warm booting is also called:', options: ['Shutdown', 'Restart', 'Sleep', 'Hibernate'], a: 1 },
            { id: '89', category: 'Software & OS', q: 'Which key combination is used for rebooting in Windows?', options: ['Ctrl + C', 'Ctrl + Alt + Del', 'Alt + Tab', 'Shift + Esc'], a: 1 },
            { id: '90', category: 'Software & OS', q: 'Shutdown is used to:', options: ['Restart system', 'Turn off computer safely', 'Sleep mode', 'Save memory'], a: 1 },
            { id: '91', category: 'Software & OS', q: 'Improper shutdown may cause:', options: ['Faster speed', 'Data loss', 'Better performance', 'More storage'], a: 1 },
            { id: '92', category: 'Software & OS', q: 'Which mode consumes more power?', options: ['Hibernate', 'Sleep', 'Shutdown', 'None'], a: 1 },
            { id: '93', category: 'Software & OS', q: 'GUI stands for:', options: ['General User Interface', 'Graphical User Interface', 'Global User Interface', 'Graphic Utility Interface'], a: 1 },
            { id: '94', category: 'Software & OS', q: 'CLI stands for:', options: ['Command Line Interface', 'Control Line Interface', 'Computer Line Interface', 'Code Line Interface'], a: 0 },
            { id: '95', category: 'Software & OS', q: 'Which interface uses icons and mouse?', options: ['CLI', 'CUI', 'GUI', 'API'], a: 2 },
            { id: '96', category: 'Input & Output Devices', q: 'Which device is used to scan printed documents and convert them into digital format?', options: ['Monitor', 'Printer', 'Scanner', 'Speaker'], a: 2 },
            { id: '97', category: 'Input & Output Devices', q: 'A device used to point, click, and drag on the screen is:', options: ['Keyboard', 'Mouse', 'Monitor', 'Joystick'], a: 1 },
            { id: '98', category: 'Input & Output Devices', q: 'Which of the following is the most commonly used input device?', options: ['Printer', 'Monitor', 'Keyboard', 'Speaker'], a: 2 },
            { id: '99', category: 'Input & Output Devices', q: 'What type of device is a microphone?', options: ['Input', 'Output', 'Storage', 'Processing'], a: 0 },
            { id: '100', category: 'Input & Output Devices', q: 'The device used to read characters printed in special ink, used in banks, is:', options: ['MICR', 'OMR', 'OCR', 'Scanner'], a: 0 },
            { id: '101', category: 'Input & Output Devices', q: 'Which input device is most suitable for playing video games?', options: ['Light pen', 'Joystick', 'Keyboard', 'Trackball'], a: 1 },
            { id: '102', category: 'Input & Output Devices', q: 'A light pen is used to:', options: ['Scan documents', 'Print labels', 'Draw or select on screen', 'Record sound'], a: 2 },
            { id: '103', category: 'Input & Output Devices', q: 'Which device reads the bar patterns from products?', options: ['OMR', 'OCR', 'Barcode Reader', 'MICR'], a: 2 },
            { id: '104', category: 'Input & Output Devices', q: 'Which input device is specially used to mark answers in objective tests?', options: ['OCR', 'OMR', 'MICR', 'Touchpad'], a: 1 },
            { id: '105', category: 'Input & Output Devices', q: 'Which device is an input device and also a pointing device?', options: ['KeyBoard', 'Trackball', 'Speaker', 'None of the above'], a: 1 },
            { id: '106', category: 'Input & Output Devices', q: 'Which of the following is NOT an input device?', options: ['Touchscreen', 'Barcode Reader', 'Monitor', 'Joystick'], a: 2 },
            { id: '107', category: 'Input & Output Devices', q: 'OCR is used to:', options: ['Scan colors', 'Recognize handwritten text', 'Print document', 'Record videos'], a: 1 },
            { id: '108', category: 'Input & Output Devices', q: 'A device that combines keyboard and screen as both input and output is:', options: ['Projector', 'Touchscreen', 'Printer', 'None of the above'], a: 1 },
            { id: '109', category: 'Input & Output Devices', q: 'A device used to digitize hand-drawn images is called:', options: ['Plotter', 'Graphic Tablet', 'OMR', 'OCR'], a: 1 },
            { id: '110', category: 'Input & Output Devices', q: 'Which input device can identify fingerprints or iris?', options: ['Webcam', 'Scanner', 'Biometric device', 'OCR'], a: 2 },
            { id: '111', category: 'Input & Output Devices', q: 'Which of the following is a speech input device?', options: ['Webcam', 'Speaker', 'Microphone', 'Monitor'], a: 2 },
            { id: '112', category: 'Input & Output Devices', q: 'The movement of a mouse is translated into:', options: ['Sound', 'Click', 'Image', 'Cursor movement'], a: 3 },
            { id: '113', category: 'Input & Output Devices', q: 'Which of the following is NOT an output device?', options: ['Monitor', 'Printer', 'Keyboard', 'None of the above'], a: 2 },
            { id: '114', category: 'Input & Output Devices', q: 'Which of the following is an example of a softcopy output device?', options: ['Monitor', 'Printer', 'Plotter', 'Speaker'], a: 0 },
            { id: '115', category: 'Input & Output Devices', q: 'What does DPI in printers stand for?', options: ['Dots Per Inch', 'Data Per Inch', 'Display Pixel Information', 'Dot Processing Interface'], a: 0 },
            { id: '116', category: 'Input & Output Devices', q: 'Which device is used to produce sound output in a computer system?', options: ['Scanner', 'Speaker', 'Monitor', 'Joystick'], a: 1 },
            { id: '117', category: 'Input & Output Devices', q: 'Which output device is used for audio output?', options: ['Monitor', 'Printer', 'Speaker', 'Plotter'], a: 2 },
            { id: '118', category: 'Input & Output Devices', q: 'Which feature of an output device determines the clarity of the image on screen?', options: ['Bit rate', 'DPI', 'Refresh rate', 'Resolution'], a: 3 },
            { id: '119', category: 'Input & Output Devices', q: 'Which of the following is a soft copy output device?', options: ['Monitor', 'Printer', 'Plotter', 'None of the above'], a: 0 },
            { id: '120', category: 'Memory & Storage', q: 'Which of the following is the largest memory unit?', options: ['Gigabyte', 'Terabyte', 'Petabyte', 'Exabyte'], a: 3 },
            { id: '121', category: 'Memory & Storage', q: 'Which of the following is the smallest unit of memory?', options: ['Bit', 'Byte', 'Kilobyte', 'Megabyte'], a: 0 },
            { id: '122', category: 'Memory & Storage', q: 'Which register holds the memory address of the instruction to be executed?', options: ['Accumulator', 'Program Counter (PC)', 'Memory Address Register (MAR)', 'Instruction Register (IR)'], a: 1 },
            { id: '123', category: 'Memory & Storage', q: 'Cache memory is used to:', options: ['Store frequently accessed data', 'Increase RAM size', 'Replace the hard disk', 'Store operating system files permanently'], a: 0 },
            { id: '124', category: 'Memory & Storage', q: 'Which technique is used in cache memory to replace the least used data?', options: ['FIFO', 'LRU', 'Round Robin', 'Paging'], a: 1 },
            { id: '125', category: 'Memory & Storage', q: 'Which cache memory has the largest size but is slower compared to others?', options: ['L1', 'L2', 'L3', 'L4'], a: 2 },
            { id: '126', category: 'Memory & Storage', q: 'Which of the following is NOT a characteristic of RAM?', options: ['Volatile', 'Temporary storage', 'Non-volatile', 'Fast access'], a: 2 },
            { id: '127', category: 'Memory & Storage', q: 'Which ROM type can only be programmed once?', options: ['EPROM', 'PROM', 'EEPROM', 'Flash ROM'], a: 1 },
            { id: '128', category: 'Memory & Storage', q: 'Which type of ROM can be rewritten using an electrical signal?', options: ['PROM', 'EPROM', 'EEPROM', 'Mask ROM'], a: 2 },
            { id: '129', category: 'Memory & Storage', q: 'What is the main purpose of secondary memory?', options: ['To store frequently used data', 'To store permanent data', 'To execute instructions', 'To provide fast access to the processor'], a: 1 },
            { id: '130', category: 'Memory & Storage', q: 'Which of the following is NOT a characteristic of secondary memory?', options: ['Non-volatile', 'Permanent storage', 'Faster than primary memory', 'Large storage capacity'], a: 2 },
            { id: '131', category: 'Memory & Storage', q: 'Which type of secondary storage device uses magnetic fields to store data?', options: ['Hard Disk Drive (HDD)', 'CD-ROM', 'Solid State Drive (SSD)', 'Blu-ray'], a: 0 },
            { id: '132', category: 'Memory & Storage', q: 'Which of the following storage devices has no moving parts?', options: ['Hard Disk Drive', 'Optical Disk', 'Solid State Drive', 'Floppy Disk'], a: 2 },
            { id: '133', category: 'Memory & Storage', q: 'What is the main advantage of SSD over HDD?', options: ['Cheaper price', 'Larger storage capacity', 'Faster read/write speed', 'Uses Optical Technology'], a: 2 },
            { id: '134', category: 'Memory & Storage', q: 'Which secondary memory device provides the highest storage capacity?', options: ['CD-ROM', 'DVD', 'Blu-ray Disc', 'Hard Disk Drive'], a: 3 },
            { id: '135', category: 'Memory & Storage', q: 'What is the standard storage capacity of a CD-ROM?', options: ['500 MB', '700 MB', '4.7 GB', '50 GB'], a: 1 },
            { id: '136', category: 'Memory & Storage', q: 'Which of the following is an erasable optical disk?', options: ['CD-R', 'CD-RW', 'DVD-R', 'Blu-ray Disc'], a: 1 },
            { id: '137', category: 'Memory & Storage', q: 'Which type of CD can be written on once and read multiple times?', options: ['CD-R', 'CD-RW', 'CD-ROM', 'CD-Erasable'], a: 0 },
            { id: '138', category: 'Memory & Storage', q: 'What is the standard storage capacity of a single-layer DVD?', options: ['700 MB', '4.7 GB', '25 GB', '50 GB'], a: 1 },
            { id: '139', category: 'Internet & Email', q: 'An email address consists of:', options: ['Only username', 'Only domain', 'Username + @ + Domain', 'Only symbols'], a: 2 },
            { id: '140', category: 'Internet & Email', q: 'In user123@gmail.com, "user123" is:', options: ['Domain', 'Username', 'Protocol', 'Server'], a: 1 },
            { id: '141', category: 'Internet & Email', q: 'In user123@gmail.com, "gmail.com" is:', options: ['Username', 'Protocol', 'Domain', 'Password'], a: 2 },
            { id: '142', category: 'Internet & Email', q: 'SMTP is used to:', options: ['Receive emails', 'Send emails', 'Store emails', 'Delete emails'], a: 1 },
            { id: '143', category: 'Internet & Email', q: 'IMAP is used to:', options: ['Send emails', 'Read emails from server', 'Delete emails', 'Compress emails'], a: 1 },
            { id: '144', category: 'Internet & Email', q: 'POP3 is used to:', options: ['Send mail', 'Download emails', 'Scan virus', 'Compress data'], a: 1 },
            { id: '145', category: 'Internet & Email', q: 'Which protocol keeps emails on server?', options: ['SMTP', 'POP3', 'IMAP', 'FTP'], a: 2 },
            { id: '146', category: 'Internet & Email', q: 'Gmail is a service provided by:', options: ['Microsoft', 'Apple', 'Google', 'IBM'], a: 2 },
            { id: '147', category: 'Internet & Email', q: 'Gmail was launched in:', options: ['2000', '2002', '2004', '2006'], a: 2 },
            { id: '148', category: 'Internet & Email', q: 'Free storage provided by Gmail is:', options: ['5GB', '10GB', '15GB', '20GB'], a: 2 },
            { id: '149', category: 'Internet & Email', q: 'Which option is used to send a new email?', options: ['Inbox', 'Compose', 'Draft', 'Spam'], a: 1 },
            { id: '150', category: 'Internet & Email', q: 'Draft folder stores:', options: ['Sent emails', 'Unfinished emails', 'Deleted emails', 'Spam'], a: 1 },
            { id: '151', category: 'Internet & Email', q: 'Spam folder contains:', options: ['Important emails', 'Junk emails', 'Draft emails', 'Sent emails'], a: 1 },
            { id: '152', category: 'Internet & Email', q: 'CC in email stands for:', options: ['Carbon Copy', 'Computer Copy', 'Control Copy', 'Common Copy'], a: 0 },
            { id: '153', category: 'Internet & Email', q: 'Difference between CC and BCC:', options: ['No difference', 'BCC hides recipient list', 'CC hides recipient list', 'Both hide'], a: 1 },
            { id: '154', category: 'Networking', q: 'How many layers are there in the OSI Model?', options: ['5', '6', '7', '4'], a: 2 },
            { id: '155', category: 'Networking', q: 'Which layer of the OSI model is responsible for end-to-end delivery of messages?', options: ['Network Layer', 'Data Link Layer', 'Transport Layer', 'Physical Layer'], a: 2 },
            { id: '156', category: 'Networking', q: 'The function of error detection and correction is performed in which layer?', options: ['Network', 'Session', 'Data Link', 'Application'], a: 2 },
            { id: '157', category: 'Networking', q: 'Which layer is responsible for data encryption and compression?', options: ['Presentation', 'Session Layer', 'Application Layer', 'Transport Layer'], a: 0 },
            { id: '158', category: 'Networking', q: 'Which of the following is the topmost layer in the OSI model?', options: ['Network', 'Application', 'Transport', 'Session'], a: 1 },
            { id: '159', category: 'Networking', q: 'The IP protocol operates at which OSI layer?', options: ['Data Link', 'Network', 'Transport', 'Application'], a: 1 },
            { id: '160', category: 'Networking', q: 'Which layer is responsible for establishing, managing, and terminating sessions?', options: ['Application', 'Presentation', 'Session', 'Transport'], a: 2 },
            { id: '161', category: 'Networking', q: 'Which OSI layer deals with physical connections and transmission of raw bits?', options: ['Network', 'Physical', 'Data Link', 'Session'], a: 1 },
            { id: '162', category: 'Networking', q: 'Walkie-talkies work on which mode of communication?', options: ['Simplex', 'Full Duplex', 'Half Duplex', 'Broadband'], a: 2 },
            { id: '163', category: 'Networking', q: 'In which communication mode does data travel in only one direction?', options: ['Half Duplex', 'Simplex', 'Full Duplex', 'Multiplex'], a: 1 },
            { id: '164', category: 'Networking', q: 'Internet is:', options: ['Private network', 'Public network', 'Local network', 'Internal network'], a: 1 },
            { id: '165', category: 'Networking', q: 'Intranet is used within:', options: ['Whole world', 'Organization', 'Internet café', 'Public places'], a: 1 },
            { id: '166', category: 'Networking', q: 'Extranet is:', options: ['Internal network only', 'Public network', 'No network', 'Private network with limited external access'], a: 3 },
            { id: '167', category: 'Networking', q: 'Which network is most secure?', options: ['Internet', 'Intranet', 'Extranet', 'All equal'], a: 1 },
            { id: '168', category: 'Internet & Email', q: 'Which is an example of a web browser?', options: ['MS Word', 'Excel', 'Google Chrome', 'Windows'], a: 2 },
            { id: '169', category: 'Internet & Email', q: 'Collection of webpages is called:', options: ['Server', 'Browser', 'Website', 'Protocol'], a: 2 },
            { id: '170', category: 'Internet & Email', q: 'Which language is used to design webpages?', options: ['C', 'Java', 'HTML', 'Python'], a: 2 },
            { id: '171', category: 'Internet & Email', q: 'Search engine is used to:', options: ['Create webpage', 'Search information', 'Send email', 'Store files'], a: 1 },
            { id: '172', category: 'Internet & Email', q: 'Which is a search engine?', options: ['Chrome', 'Google', 'Windows', 'Excel'], a: 1 },
            { id: '173', category: 'Internet & Email', q: 'Which is NOT a search engine?', options: ['Bing', 'Yahoo', 'Chrome', 'DuckDuckGo'], a: 2 },
            { id: '174', category: 'Internet & Email', q: 'Search engines use:', options: ['CPU', 'Algorithms', 'RAM', 'Hardware'], a: 1 },
            { id: '175', category: 'Internet & Email', q: 'Which factor improves SEO?', options: ['Keywords', 'RAM', 'CPU', 'Printer'], a: 0 },
            { id: '176', category: 'Internet & Email', q: 'SEO stands for:', options: ['Search Engine Operation', 'Search Engine Optimization', 'System Engine Optimization', 'Search Engine Output'], a: 1 },
            { id: '177', category: 'Internet & Email', q: 'WWW stands for:', options: ['World Wide Web', 'World Web Wide', 'Wide World Web', 'Web World Wide'], a: 0 },
            { id: '178', category: 'Internet & Email', q: 'URL stands for:', options: ['Uniform Resource Locator', 'Universal Resource Link', 'Uniform Reference Link', 'Universal Reference Locator'], a: 0 },
            { id: '179', category: 'Networking', q: 'What is the typical range of a Personal Area Network (PAN)?', options: ['1-10 meters', '10-100 meters', '100-500 meters', '1-10 kilometers'], a: 0 },
            { id: '180', category: 'Networking', q: 'Which of the following best describes a MAN?', options: ['Covers a single building', 'Covers a city or large campus', 'Covers a country', 'Covers multiple continents'], a: 1 },
            { id: '181', category: 'Networking', q: 'Which of the following is an example of a PAN?', options: ['Bluetooth-connected headphones', 'Office network', 'City-wide Wi-Fi', 'Cloud computing network'], a: 0 },
            { id: '182', category: 'Networking', q: 'What is the maximum recommended range of a standard Wi-Fi (WLAN) network?', options: ['30 meters indoors', '200 meters outdoors', '5 kilometers', 'Both a and b'], a: 3 },
            { id: '183', category: 'Networking', q: 'Which network type is typically used in schools, offices, and homes?', options: ['WAN', 'LAN', 'MAN', 'PAN'], a: 1 },
            { id: '184', category: 'Networking', q: 'Which of the following devices is required to access the internet from an ISP?', options: ['Router', 'Switch', 'Modem', 'Access Point'], a: 2 },
            { id: '185', category: 'Networking', q: 'Which of the following is the primary function of a modem?', options: ['Connects multiple devices within a network', 'Converts digital signals into analog and vice versa', 'Assigns IP addresses to connected devices', 'Enhances Wi-Fi signal strength'], a: 1 },
            { id: '186', category: 'Networking', q: 'A router primarily performs which of the following functions?', options: ['Converts data signals for transmission over telephone lines', 'Directs data traffic between networks', 'Compresses data for faster transmission', 'Stores backup network configurations'], a: 1 },
            { id: '187', category: 'Networking', q: 'Network topology refers to:', options: ['Type of computer', 'Arrangement of devices', 'Speed of internet', 'Software type'], a: 1 },
            { id: '188', category: 'Networking', q: 'Which topology connects all devices to a central hub?', options: ['Bus', 'Ring', 'Star', 'Mesh'], a: 2 },
            { id: '189', category: 'Networking', q: 'In Bus topology, all devices are connected to:', options: ['Central hub', 'Single cable', 'Ring', 'Server'], a: 1 },
            { id: '190', category: 'Networking', q: 'Main disadvantage of Bus topology:', options: ['High cost', 'Complex design', 'Failure of main cable affects all', 'Slow speed'], a: 2 },
            { id: '191', category: 'Networking', q: 'In Mesh topology, each node is connected to:', options: ['One node', 'Two nodes', 'All nodes', 'Central hub'], a: 2 },
            { id: '192', category: 'Networking', q: 'Which device connects multiple devices in a LAN?', options: ['Router', 'Switch', 'Bridge', 'Modem'], a: 1 },
            { id: '193', category: 'Networking', q: 'Which device broadcasts data to all devices?', options: ['Switch', 'Router', 'Hub', 'Bridge'], a: 2 },
            { id: '194', category: 'Networking', q: 'Which device connects different networks?', options: ['Switch', 'Hub', 'Router', 'Bridge'], a: 2 },
            { id: '195', category: 'Networking', q: 'Which device connects two LAN segments?', options: ['Router', 'Hub', 'Switch', 'Bridge'], a: 3 },
            { id: '196', category: 'Cybersecurity', q: 'Which of the following best describes a computer virus?', options: ['A standalone program', 'A malicious program that attaches itself to a host file', 'A hardware failure causing system crashes', 'A legitimate security software'], a: 1 },
            { id: '197', category: 'Cybersecurity', q: 'Which of the following is NOT a type of computer worm?', options: ['Email Worm', 'Internet Worm', 'Trojan Horse', 'File-Sharing Worm'], a: 2 },
            { id: '198', category: 'Cybersecurity', q: 'Which type of virus infects the Master Boot Record (MBR) of a hard drive?', options: ['File infector virus', 'Boot sector virus', 'Macro virus', 'Polymorphic virus'], a: 1 },
            { id: '199', category: 'Cybersecurity', q: 'Which of the following is a self-replicating program that does not need a host file to spread?', options: ['Trojan Horse', 'Worm', 'Rootkit', 'Spyware'], a: 1 },
            { id: '200', category: 'Cybersecurity', q: 'A type of malware that appears to be legitimate software but actually performs malicious actions is called:', options: ['Adware', 'Trojan Horse', 'Worm', 'Ransomware'], a: 1 },
            { id: '201', category: 'Cybersecurity', q: 'What does adware typically do?', options: ['Destroys files', 'Encrypts the hard disk', 'Shows unwanted advertisements', 'Steals passwords'], a: 2 }
        ];

        let testQuestions = []; 
        let currentQuestionIndex = 0;
        let timerInterval;
        let timeLeft = 60 * 60; // 60 minutes
        let isSubmitted = false;
        let currentCategory = null;

        document.addEventListener('DOMContentLoaded', () => {
            const uniqueCategories = [...new Set(window.globalQuestionsBank.map(q => q.category || 'Uncategorized'))];
            renderStudentCategories(uniqueCategories);
        });

        function hideAllScreens() {
            ['welcome-screen', 'student-dashboard-screen', 'start-screen', 'test-screen', 'result-screen'].forEach(id => {
                document.getElementById(id).classList.add('hidden');
                document.getElementById(id).classList.remove('flex');
            });
        }
        
        window.showWelcomeScreen = () => {
            hideAllScreens();
            document.getElementById('welcome-screen').classList.remove('hidden');
            document.getElementById('welcome-screen').classList.add('flex');
        };

        window.showStudentDashboard = () => {
            hideAllScreens();
            document.getElementById('student-dashboard-screen').classList.remove('hidden');
            document.getElementById('student-dashboard-screen').classList.add('flex');
        };

        window.selectCategory = (category) => {
            currentCategory = category;
            const categoryQuestions = window.globalQuestionsBank.filter(q => (q.category || 'Introduction') === category);
            
            document.getElementById('start-total-q').innerText = categoryQuestions.length;
            document.getElementById('start-screen-title').innerText = `${category} Mock Test`;
            
            if(categoryQuestions.length === 0) {
                document.getElementById('begin-test-btn').classList.add('hidden');
                document.getElementById('no-q-warning').classList.remove('hidden');
            } else {
                document.getElementById('begin-test-btn').classList.remove('hidden');
                document.getElementById('no-q-warning').classList.add('hidden');
            }

            hideAllScreens();
            document.getElementById('start-screen').classList.remove('hidden');
            document.getElementById('start-screen').classList.add('flex');
        };

        function renderStudentCategories(categories) {
            const grid = document.getElementById('student-categories-grid');
            if(!grid) return;
            grid.innerHTML = '';
            
            if(categories.length === 0) {
                grid.innerHTML = '<div class="col-span-full text-center text-slate-500 py-8 bg-white rounded-xl shadow-sm border border-slate-200">No subjects available.</div>';
                return;
            }

            const themes = [
                { bg: 'bg-blue-50', text: 'text-blue-600', border: 'hover:border-blue-400', icon: 'fa-book' },
                { bg: 'bg-green-50', text: 'text-green-600', border: 'hover:border-green-400', icon: 'fa-file-word' },
                { bg: 'bg-purple-50', text: 'text-purple-600', border: 'hover:border-purple-400', icon: 'fa-code' },
                { bg: 'bg-orange-50', text: 'text-orange-600', border: 'hover:border-orange-400', icon: 'fa-brain' },
                { bg: 'bg-red-50', text: 'text-red-600', border: 'hover:border-red-400', icon: 'fa-flask' },
                { bg: 'bg-teal-50', text: 'text-teal-600', border: 'hover:border-teal-400', icon: 'fa-calculator' }
            ];

            categories.forEach((cat, index) => {
                const count = window.globalQuestionsBank.filter(q => (q.category || 'Uncategorized') === cat).length;
                const theme = themes[index % themes.length];

                const div = document.createElement('div');
                div.className = `bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg hover:-translate-y-1 transform ${theme.border} transition-all duration-200 aspect-square text-center active:scale-95`;
                div.onclick = () => window.selectCategory(cat);

                div.innerHTML = `
                    <div class="w-12 h-12 sm:w-16 sm:h-16 ${theme.bg} ${theme.text} rounded-full flex items-center justify-center mb-3 sm:mb-4 text-xl sm:text-2xl transition-transform">
                        <i class="fas ${theme.icon}"></i>
                    </div>
                    <h3 class="font-bold text-slate-800 break-words w-full text-sm sm:text-base leading-tight">${cat}</h3>
                    <p class="text-[10px] sm:text-xs text-slate-500 mt-2 font-semibold bg-slate-100 px-2 py-1 rounded-md"><span>${count}</span> Qs</p>
                `;
                grid.appendChild(div);
            });
        }

        window.startTest = () => {
            const categoryQuestions = window.globalQuestionsBank.filter(q => (q.category || 'Introduction') === currentCategory);
            if(categoryQuestions.length === 0) return;

            testQuestions = JSON.parse(JSON.stringify(categoryQuestions)).map(q => ({
                ...q,
                status: 'not-visited',
                selectedOption: null
            }));

            document.getElementById('test-total-q').innerText = testQuestions.length;
            document.getElementById('count-not-visited').innerText = testQuestions.length;
            
            document.querySelectorAll('.test-title-display').forEach(el => el.innerText = `${currentCategory} Test`);

            hideAllScreens();
            document.getElementById('test-screen').classList.remove('hidden');
            document.getElementById('test-screen').classList.add('flex');
            
            testQuestions[0].status = 'not-answered'; 
            
            renderPalette();
            loadQuestion(0);
            startTimer();
            updateCounts();
        };

        function loadQuestion(index) {
            currentQuestionIndex = index;
            const q = testQuestions[index];
            
            if (q.status === 'not-visited') {
                q.status = 'not-answered';
                updatePaletteBtn(index);
                updateCounts();
            }

            document.getElementById('current-q-num').innerText = index + 1;
            document.getElementById('question-text').innerText = `${index + 1}. ${q.q}`;
            
            const optionsContainer = document.getElementById('options-container');
            optionsContainer.innerHTML = ''; 

            q.options.forEach((optText, optIndex) => {
                const isSelected = q.selectedOption === optIndex;
                const optDiv = document.createElement('div');
                optDiv.className = `p-3 sm:p-4 border rounded-xl cursor-pointer transition-all duration-200 flex items-center gap-3 hover:bg-blue-50 active:scale-[0.99] ${isSelected ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500 shadow-sm' : 'border-slate-200 bg-white'}`;
                optDiv.onclick = () => window.selectOption(optIndex);
                
                const radioCircle = document.createElement('div');
                radioCircle.className = `w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${isSelected ? 'border-blue-600' : 'border-slate-400'}`;
                
                if (isSelected) {
                    const innerCircle = document.createElement('div');
                    innerCircle.className = 'w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-600 rounded-full transition-transform scale-in-center';
                    radioCircle.appendChild(innerCircle);
                }

                const textSpan = document.createElement('span');
                textSpan.className = 'text-sm sm:text-base text-slate-700 font-medium';
                textSpan.innerText = optText;

                optDiv.appendChild(radioCircle);
                optDiv.appendChild(textSpan);
                optionsContainer.appendChild(optDiv);
            });

            document.querySelectorAll('.palette-btn').forEach(btn => btn.classList.remove('ring-4', 'ring-blue-300', 'scale-110', 'z-10'));
            const currentBtn = document.getElementById(`pal-btn-${index}`);
            if(currentBtn) currentBtn.classList.add('ring-4', 'ring-blue-300', 'scale-110', 'z-10');
            
            // Auto close palette on mobile after selection if it's open
            const drawer = document.getElementById('palette-drawer');
            if(!drawer.classList.contains('translate-x-full') && window.innerWidth < 1024) {
                window.togglePalette();
            }
        }

        window.selectOption = (optIndex) => {
            testQuestions[currentQuestionIndex].selectedOption = optIndex;
            const q = testQuestions[currentQuestionIndex];
            if (q.status === 'not-answered' || q.status === 'not-visited') {
                q.status = 'answered';
            } else if (q.status === 'marked') {
                q.status = 'marked-answered';
            }
            loadQuestion(currentQuestionIndex);
            updatePaletteBtn(currentQuestionIndex);
            updateCounts();
        };

        window.clearResponse = () => {
            const q = testQuestions[currentQuestionIndex];
            q.selectedOption = null;
            if (q.status === 'answered') q.status = 'not-answered';
            if (q.status === 'marked-answered') q.status = 'marked';
            loadQuestion(currentQuestionIndex);
            updatePaletteBtn(currentQuestionIndex);
            updateCounts();
        };

        window.markForReview = () => {
            const q = testQuestions[currentQuestionIndex];
            if (q.selectedOption !== null) q.status = 'marked-answered';
            else q.status = 'marked';
            updatePaletteBtn(currentQuestionIndex);
            updateCounts();
            window.goToNext();
        };

        window.saveAndNext = () => {
            const q = testQuestions[currentQuestionIndex];
            if (q.selectedOption !== null && (q.status === 'not-answered' || q.status === 'marked' || q.status === 'marked-answered')) {
                q.status = 'answered';
            }
            updatePaletteBtn(currentQuestionIndex);
            updateCounts();
            window.goToNext();
        };

        window.prevQuestion = () => {
            if (currentQuestionIndex > 0) loadQuestion(currentQuestionIndex - 1);
        };

        window.goToNext = () => {
            if (currentQuestionIndex < testQuestions.length - 1) loadQuestion(currentQuestionIndex + 1);
            else window.confirmSubmit();
        };

        function renderPalette() {
            const grid = document.getElementById('palette-grid');
            grid.innerHTML = '';
            testQuestions.forEach((q, i) => {
                const btn = document.createElement('button');
                btn.id = `pal-btn-${i}`;
                btn.className = `palette-btn w-full aspect-square rounded-md font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center relative ${getStatusClass(q.status)}`;
                btn.innerText = i + 1;
                btn.onclick = () => loadQuestion(i);
                grid.appendChild(btn);
            });
        }

        function updatePaletteBtn(index) {
            const btn = document.getElementById(`pal-btn-${index}`);
            if (btn) {
                btn.className = `palette-btn w-full aspect-square rounded-md font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center relative ${getStatusClass(testQuestions[index].status)}`;
                if(index === currentQuestionIndex) btn.classList.add('ring-4', 'ring-blue-300', 'scale-110', 'z-10');
            }
        }

        function getStatusClass(status) {
            switch(status) {
                case 'not-visited': return 'status-not-visited';
                case 'not-answered': return 'status-not-answered';
                case 'answered': return 'status-answered';
                case 'marked': return 'status-marked';
                case 'marked-answered': return 'status-marked-answered';
                default: return 'status-not-visited';
            }
        }

        function updateCounts() {
            let counts = { 'answered': 0, 'not-answered': 0, 'not-visited': 0, 'marked': 0, 'marked-answered': 0 };
            testQuestions.forEach(q => counts[q.status]++);
            
            document.getElementById('count-answered').innerText = counts['answered'];
            document.getElementById('count-not-answered').innerText = counts['not-answered'];
            document.getElementById('count-not-visited').innerText = counts['not-visited'];
            document.getElementById('count-marked').innerText = counts['marked'];
            document.getElementById('count-marked-answered').innerText = counts['marked-answered'];
        }

        window.togglePalette = () => {
            const drawer = document.getElementById('palette-drawer');
            const overlay = document.getElementById('palette-overlay');
            drawer.classList.toggle('translate-x-full');
            
            if (drawer.classList.contains('translate-x-full')) {
                overlay.classList.add('hidden');
            } else {
                overlay.classList.remove('hidden');
            }
        };

        function startTimer() {
            timeLeft = 60 * 60;
            timerInterval = setInterval(() => {
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    window.submitTest();
                } else {
                    timeLeft--;
                    updateTimerDisplay();
                }
            }, 1000);
        }

        function updateTimerDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById('timer').innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            if(timeLeft < 300) document.getElementById('timer').classList.add('text-red-400');
            else document.getElementById('timer').classList.remove('text-red-400');
        }

        window.confirmSubmit = () => {
            document.getElementById('submit-modal').classList.remove('hidden');
            // Slight delay to allow display:block to apply before animating opacity if we were doing complex animations
        };

        window.closeSubmitModal = () => {
            document.getElementById('submit-modal').classList.add('hidden');
        };

        window.submitTest = () => {
            if(isSubmitted) return;
            isSubmitted = true;
            clearInterval(timerInterval);
            document.getElementById('submit-modal').classList.add('hidden');
            hideAllScreens();
            
            calculateResults();
            
            document.getElementById('result-screen').classList.remove('hidden');
            document.getElementById('result-screen').classList.add('flex');
        };

        function calculateResults() {
            let correct = 0, incorrect = 0, unattempted = 0;
            const total = testQuestions.length;

            testQuestions.forEach(q => {
                if (q.selectedOption === null) unattempted++;
                else if (q.selectedOption === q.a) correct++;
                else incorrect++;
            });

            const attempted = correct + incorrect;
            const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

            document.getElementById('res-total').innerText = total;
            document.getElementById('res-score').innerText = correct;
            document.getElementById('res-correct').innerText = correct;
            document.getElementById('res-incorrect').innerText = incorrect;
            document.getElementById('res-attempted').innerText = attempted;
            document.getElementById('res-unattempted').innerText = unattempted;
            document.getElementById('res-accuracy').innerText = `${accuracy}%`;

            if(total > 0) {
                // Add a small delay for smooth animation of bars
                setTimeout(() => {
                    document.getElementById('bar-correct').style.width = `${(correct/total)*100}%`;
                    document.getElementById('bar-incorrect').style.width = `${(incorrect/total)*100}%`;
                    document.getElementById('bar-unattempted').style.width = `${(unattempted/total)*100}%`;
                }, 100);
            }
        }