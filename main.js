document.addEventListener('DOMContentLoaded', () => {
            const preloader = document.getElementById('preloader');
            const mainContent = document.getElementById('main-content');
            const mainHeader = document.getElementById('main-header');
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const enableScroll = () => { document.body.style.overflow = 'auto'; };
            
    
            // Preloader logic
            if (preloader && mainContent) { 
                document.body.style.overflow = 'hidden'; 
                setTimeout(() => { 
                    preloader.classList.add('slide-up'); 
                    mainContent.style.transition = 'opacity 0.5s ease-in'; 
                    mainContent.style.opacity = '1'; 
                    setTimeout(() => { 
                        preloader.style.display = 'none'; 
                        enableScroll(); 
                    }, 1000); 
                }, 2000); 
            } else { 
                enableScroll(); 
            }
    
            // Mobile menu toggle
            if (mobileMenuButton && mobileMenu) { 
                mobileMenuButton.addEventListener('click', () => { 
                    mobileMenu.classList.toggle('hidden'); 
                }); 
            }
        });

        document.addEventListener('DOMContentLoaded', () => {
        // Logika untuk menu mobile
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // =======================================================
        // == DATA BERITA DENGAN VARIASI SUDUT PANDANG          ==
        // =======================================================
        const beritaData = [
            {
                kategori: 'News Nasional',
                judul: 'Keindahan Alam Raja Ampat Terancam Tambang Nikel, Kemenpar Buka Suara',
                deskripsi: 'Rencana ekspansi tambang nikel ke Raja Ampat memicu kekhawatiran berbagai pihak. Surga wisata dunia itu kini terancam rusak oleh aktivitas industri ekstraktif.',
                link: 'https://www.inews.id/multimedia/video/headline-inewsid-keindahan-alam-raja-ampat-terancam-tambang-nikel-kemenpar-buka-suara',
                gambarUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrFeLy4RXaCjppqthds7azNjW5hlEvfiBYivRZ3OEKIt-W3DGa1VGpphuzxeOVSrS7nNQwR3uWNJI2wdZMHB8pfrLwPbDITCCXF2pdpp_iFnwWnCMTwEFiFfYeQ42ohWuLYnGgnUA=w810-h468-n-k-no'
            },
            {
                kategori: 'Regional',
                judul: 'Ekowisata Malagufuk, Hutan Papua yang Melindungi Berbagai Macam Hewan Termasuk Ular Berbisa',
                deskripsi: 'Ekowisata Malagufuk di Distrik Makbon, Kabupaten Sorong, Provinsi Papua Barat Daya, menawarkan keindahan alam serta kesempatan untuk memantau..',
                link: 'https://regional.kompas.com/read/2025/05/16/074629878/ekowisata-malagufuk-hutan-papua-yang-melindungi-berbagai-macam-hewan',
                gambarUrl: 'https://asset.kompas.com/crops/W-yOiwi5ZcwOV_BTNoI4smT_LVc=/0x0:0x0/1200x800/data/photo/2025/05/15/6825bb663437c.jpg'
            },
            {
                kategori: 'News Nasional',
                judul: 'Dukung Penutupan Tambang Nikel di Raja Ampat, Lamhot Sinaga: Keindahan Alam dan Kekayaan Hayati Harus Dilestarikan',
                deskripsi: 'Wakil Ketua Komisi VII Dewan Perwakilan Rakyat (DPR) RI, Lamhot Sinaga, mendukung penuh keputusan Menteri Energi dan Sumber Daya Mineral (ESDM) Bahlil Lahadalia..',
                link: 'https://nasional.kompas.com/read/2025/06/08/20044061/dukung-penutupan-tambang-nikel-di-raja-ampat-lamhot-sinaga-keindahan-alam',
                gambarUrl: 'https://asset.kompas.com/crops/E-dqX3EfKL5oXJ1qRIKN75sdW7c=/321x0:321x0/1200x800/data/photo/2025/06/08/684589355870d.jpeg'
            },
            {
                kategori: 'Regional',
                judul: 'Demo, Mahasiswa Pencinta Alam Siram Kantor Pemkab Sumenep',
                deskripsi: 'Setelah memanggul galon air, Jaiwan Zakariya dan M Yusuf Al Afandi menyiram halaman Kantor Pemerintah Kabupaten (Pemkab) Sumenep, Jawa Timur, Kamis..',
                link: 'https://surabaya.kompas.com/read/2025/06/05/130308278/demo-mahasiswa-pencinta-alam-siram-kantor-pemkab-sumenep',
                gambarUrl: 'https://asset.kompas.com/crops/DfHtPdnv_AFmKitSbsX2LGxclcw=/0x0:0x0/1200x800/data/photo/2025/06/05/6841275f05e44.jpg'
            },
            {
                kategori: 'Satwa Liar',
                judul: 'Konflik Manusia dan Gajah Kembali Terjadi di Perkebunan Sawit Aceh',
                deskripsi: 'Menyusutnya habitat alami memicu gajah memasuki area perkebunan, menimbulkan kerugian dan menuntut solusi jangka panjang dari semua pihak.',
                link: 'https://www.google.com/search?q=berita+konflik+gajah+manusia+aceh&tbm=nws',
                gambarUrl: 'https://images.unsplash.com/photo-1551106399-450a31818314?q=80&w=1974&auto=format&fit=crop'
            },
            {
                kategori: 'Kesehatan Lingkungan',
                judul: 'Studi Terbaru Kaitkan Polusi Udara di Perkotaan dengan Peningkatan Kasus Asma',
                deskripsi: 'Penelitian yang dipublikasikan di jurnal kesehatan internasional menunjukkan korelasi kuat antara partikel PM2.5 dengan gangguan pernapasan.',
                link: 'https://www.google.com/search?q=berita+studi+polusi+udara+penyakit+pernapasan&tbm=nws',
                gambarUrl: 'https://images.unsplash.com/photo-1611270418597-a6c7e334b6ce?q=80&w=1964&auto=format&fit=crop'
            },
        ];

        const beritaContainer = document.getElementById('berita-container');
        if (beritaContainer) {
            const createBeritaCard = (berita) => {
                return `
                    <a href="${berita.link}" target="_blank" rel="noopener noreferrer" class="block bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl group">
                        <div class="relative h-48 w-full">
                            <img src="${berita.gambarUrl}" alt="Thumbnail ${berita.judul}" class="absolute h-full w-full object-cover transition-transform duration-300 group-hover:scale-105">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-0 left-0 p-4"><h2 class="text-2xl font-bold text-white">${berita.kategori}</h2></div>
                        </div>
                        <div class="p-6 flex flex-col h-full">
                            <h3 class="text-xl font-bold text-gray-800 mb-2">${berita.judul}</h3>
                            <p class="text-gray-600 text-base mb-6 leading-relaxed flex-grow">${berita.deskripsi}</p>
                            <span class="font-semibold text-[#2E5339] inline-flex items-center mt-auto">
                                Jelajahi Topik Ini
                                <svg class="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </span>
                        </div>
                    </a>
                `;
            };
            beritaData.forEach(berita => {
                beritaContainer.innerHTML += createBeritaCard(berita);
            });
        }
    });

     document.addEventListener('DOMContentLoaded', () => {

            // --- BAGIAN 1: LOGIKA UNTUK GRAFIK (DIUBAH MENJADI MULTI-LINE CHART) ---

            const ctx = document.getElementById('wasteChart');
            if (ctx) {
                // Data baru dengan beberapa kategori
                const multiLineChartData = {
                    labels: ['2020', '2021', '2022', '2023', '2024', '2025 (Estimasi)'],
                    datasets: [
                        {
                            label: 'Sampah Plastik',
                            data: [480, 510, 550, 540, 580, 620],
                            borderColor: '#3B82F6', // Biru
                            backgroundColor: 'rgba(59, 130, 246, 0.2)',
                            fill: true,
                            tension: 0.3
                        },
                        {
                            label: 'Sampah Organik',
                            data: [350, 360, 340, 370, 350, 380],
                            borderColor: '#10B981', // Hijau
                            backgroundColor: 'rgba(16, 185, 129, 0.2)',
                            fill: true,
                            tension: 0.3
                        },
                        {
                            label: 'Lainnya (Logam, Kaca, dll.)',
                            data: [210, 200, 220, 240, 230, 250],
                            borderColor: '#6B7280', // Abu-abu
                            backgroundColor: 'rgba(107, 114, 128, 0.2)',
                            fill: true,
                            tension: 0.3
                        }
                    ]
                };

                new Chart(ctx, {
                    type: 'line',
                    data: multiLineChartData,
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: false,
                                title: {
                                    display: true,
                                    text: 'Volume (dalam ribu ton)',
                                    font: { family: "'Poppins', sans-serif" }
                                }
                            },
                            x: {
                                title: {
                                    display: true,
                                    text: 'Tahun',
                                    font: { family: "'Poppins', sans-serif" }
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                display: true, // DIUBAH: Menampilkan legenda
                                position: 'top',
                                labels: {
                                    font: { family: "'Poppins', sans-serif" }
                                }
                            },
                            tooltip: {
                                padding: 10,
                                titleFont: { family: "'Poppins', sans-serif", weight: 'bold'},
                                bodyFont: { family: "'Poppins', sans-serif"},
                                callbacks: {
                                    label: function(context) {
                                        let label = context.dataset.label || '';
                                        if (label) {
                                            label += ': ';
                                        }
                                        if (context.parsed.y !== null) {
                                            label += `${context.parsed.y} ribu ton`;
                                        }
                                        return label;
                                    }
                                }
                            }
                        },
                        interaction: {
                          intersect: false,
                          mode: 'index',
                        },
                    }
                });
            }


            // --- BAGIAN 2: LOGIKA UNTUK FITUR "JELAJAHI TOPIK" (SIMULASI AI) ---
            // Kode ini tidak diubah
            const topicInput = document.getElementById('topic-input');
            const exploreBtn = document.getElementById('explore-topic-btn');
            const topicLoader = document.getElementById('topic-loader');
            const topicResult = document.getElementById('topic-result');

            exploreBtn.addEventListener('click', () => {
                const query = topicInput.value.toLowerCase().trim();

                if (!query) {
                    alert('Mohon masukkan topik yang ingin Anda jelajahi.');
                    return;
                }
                
                topicLoader.classList.remove('hidden');
                topicResult.classList.add('hidden');
                exploreBtn.disabled = true;
                exploreBtn.innerText = 'Sedang Mencari...';

                setTimeout(() => {
                    let responseText = '';

                    if (query.includes('jejak karbon') || query.includes('carbon footprint')) {
                        responseText = `
                            <p><strong>Jejak karbon</strong> adalah jumlah total gas rumah kaca (seperti karbon dioksida dan metana) yang dihasilkan oleh aktivitas manusia, baik secara langsung maupun tidak langsung.</p>
                            <p class="mt-2"><strong>Cara menguranginya:</strong></p>
                            <ul class="list-disc list-inside mt-2 space-y-1">
                                <li>Menggunakan transportasi umum, sepeda, atau berjalan kaki.</li>
                                <li>Menghemat penggunaan listrik di rumah (mematikan lampu, mencabut alat elektronik).</li>
                                <li>Mengurangi konsumsi daging dan memilih makanan lokal.</li>
                                <li>Mendaur ulang sampah dan mengurangi limbah.</li>
                            </ul>`;
                    } else if (query.includes('menjaga lingkungan') || query.includes('lestarikan alam')) {
                        responseText = `
                            <p>Menjaga lingkungan bisa dimulai dari tindakan sederhana sehari-hari. Ini adalah investasi untuk masa depan bumi dan generasi mendatang.</p>
                            <p class="mt-2"><strong>Beberapa cara mudah untuk memulai:</strong></p>
                            <ul class="list-disc list-inside mt-2 space-y-1">
                                <li><strong>3R (Reduce, Reuse, Recycle):</strong> Kurangi sampah, gunakan kembali barang, dan daur ulang.</li>
                                <li><strong>Hemat Energi:</strong> Matikan listrik dan air saat tidak digunakan.</li>
                                <li><strong>Tanam Pohon:</strong> Bahkan satu pohon di halaman rumah sangat berarti untuk menyerap CO2.</li>
                                <li><strong>Bawa Tas Belanja Sendiri:</strong> Kurangi penggunaan kantong plastik sekali pakai.</li>
                            </ul>`;
                    } else {
                        responseText = `<p>Maaf, untuk saat ini saya belum memiliki informasi mendalam mengenai topik "<strong>${topicInput.value}</strong>". Silakan coba topik lain seperti "jejak karbon" atau "cara menjaga lingkungan".</p>`;
                    }
                    
                    topicResult.innerHTML = responseText;
                    topicLoader.classList.add('hidden');
                    topicResult.classList.remove('hidden');
                    exploreBtn.disabled = false;
                    exploreBtn.innerText = 'Jelajahi Sekarang';

                }, 2000);
            });
        });


         document.addEventListener('DOMContentLoaded', function () {
            const navLinks = document.querySelectorAll('.nav-link');
            const contentSections = document.querySelectorAll('.content-section');
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            const generatePlanBtn = document.getElementById('generate-plan-btn');
            const actionPlanInput = document.getElementById('action-plan-input');
            const planLoader = document.getElementById('plan-loader');
            const planResult = document.getElementById('plan-result');
            
            const exploreTopicBtn = document.getElementById('explore-topic-btn');
            const topicInput = document.getElementById('topic-input');
            const topicLoader = document.getElementById('topic-loader');
            const topicResult = document.getElementById('topic-result');
            
            const errorModal = document.getElementById('error-modal');
            const errorMessage = document.getElementById('error-message');
            const closeModalBtn = document.getElementById('close-modal-btn');

            function updateActiveLink(targetId) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${targetId}`);
                });
                
                const mobileNavLinks = mobileMenu.querySelectorAll('.nav-link');
                mobileNavLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${targetId}`);
                });
            }

            function showSection(targetId) {
                contentSections.forEach(section => {
                    section.classList.toggle('hidden', section.id !== targetId);
                });
                updateActiveLink(targetId);
                window.scrollTo(0, 0);
            }
            
            function handleNavClick(event) {
                let targetLink = null;
                if (event.target.matches('a[href^="#"]')) {
                    targetLink = event.target;
                } else if (event.target.closest('a[href^="#"]')) {
                    targetLink = event.target.closest('a[href^="#"]');
                }

                if (targetLink) {
                    event.preventDefault();
                    const targetId = targetLink.getAttribute('href').substring(1);
                    if(document.getElementById(targetId)) {
                        showSection(targetId);
                        if (!mobileMenu.classList.contains('hidden')) {
                           mobileMenu.classList.add('hidden');
                        }
                    } else {
                         showSection('beranda');
                    }
                }
            }
            
            document.body.addEventListener('click', handleNavClick);

            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
            
            function showErrorModal(message = 'Maaf, terjadi kesalahan tak terduga. Silakan coba lagi nanti.') {
                errorMessage.textContent = message;
                errorModal.classList.remove('hidden');
            }
            
            closeModalBtn.addEventListener('click', () => {
                errorModal.classList.add('hidden');
            });

            async function callGeminiAPI(prompt, isJson = false) {
                const apiKey = "";
                const model = 'gemini-2.0-flash';
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

                const payload = {
                    contents: [{ role: "user", parts: [{ text: prompt }] }]
                };
                
                if (isJson) {
                    payload.generationConfig = {
                        responseMimeType: "application/json",
                        responseSchema: {
                          type: "OBJECT",
                          properties: {
                            planTitle: { type: "STRING" },
                            steps: {
                              type: "ARRAY",
                              items: {
                                type: "OBJECT",
                                properties: {
                                  title: { type: "STRING" },
                                  description: { type: "STRING" }
                                },
                                required: ["title", "description"]
                              }
                            }
                          },
                          required: ["planTitle", "steps"]
                        }
                    };
                }

                try {
                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                    
                    if (!response.ok) {
                       throw new Error(`API request failed with status ${response.status}`);
                    }

                    const result = await response.json();
                    
                    if (result.candidates && result.candidates.length > 0 &&
                        result.candidates[0].content && result.candidates[0].content.parts &&
                        result.candidates[0].content.parts.length > 0) {
                        return result.candidates[0].content.parts[0].text;
                    } else {
                        throw new Error("Respons dari API tidak valid atau kosong.");
                    }
                } catch (error) {
                    console.error("Gemini API Error:", error);
                    showErrorModal(error.message);
                    return null;
                }
            }
            
            generatePlanBtn.addEventListener('click', async () => {
                const topic = actionPlanInput.value.trim();
                if (!topic) {
                    showErrorModal('Silakan masukkan topik untuk rencana aksi Anda.');
                    return;
                }
                
                planLoader.style.display = 'flex';
                planResult.classList.add('hidden');
                generatePlanBtn.disabled = true;

                const prompt = `Buatkan saya rencana aksi ramah lingkungan yang praktis dan dapat ditindaklanjuti untuk topik ini: "${topic}". Fokus pada langkah-langkah yang dapat dilakukan oleh individu di Indonesia. Berikan jawaban dalam format JSON yang valid sesuai skema.`;
                
                const resultText = await callGeminiAPI(prompt, true);
                
                if (resultText) {
                    try {
                        const planData = JSON.parse(resultText);
                        planResult.innerHTML = '';
                        const titleEl = document.createElement('h4');
                        titleEl.className = 'text-xl font-bold mb-4 text-[#2E5339]';
                        titleEl.textContent = planData.planTitle;
                        planResult.appendChild(titleEl);
                        
                        const listEl = document.createElement('ol');
                        listEl.className = 'space-y-4 list-decimal list-inside';
                        planData.steps.forEach(step => {
                            const itemEl = document.createElement('li');
                            itemEl.className = 'bg-stone-50 p-4 rounded-lg';
                            const stepTitle = document.createElement('strong');
                            stepTitle.textContent = step.title;
                            const stepDesc = document.createElement('p');
                            stepDesc.className = 'text-gray-600 text-sm mt-1';
                            stepDesc.textContent = step.description;
                            itemEl.appendChild(stepTitle);
                            itemEl.appendChild(stepDesc);
                            listEl.appendChild(itemEl);
                        });
                        planResult.appendChild(listEl);
                        planResult.classList.remove('hidden');
                    } catch (e) {
                         showErrorModal('Gagal mem-parsing respons dari AI. Silakan coba lagi.');
                    }
                }
                
                planLoader.style.display = 'none';
                generatePlanBtn.disabled = false;
            });

            exploreTopicBtn.addEventListener('click', async () => {
                const topic = topicInput.value.trim();
                if (!topic) {
                    showErrorModal('Silakan masukkan pertanyaan atau topik untuk dijelajahi.');
                    return;
                }
                
                topicLoader.style.display = 'flex';
                topicResult.classList.add('hidden');
                exploreTopicBtn.disabled = true;

                const prompt = `Jelaskan topik lingkungan berikut dengan bahasa yang sederhana, ringkas, dan mudah dipahami untuk audiens umum di Indonesia: "${topic}". Berikan jawaban dalam 2-3 paragraf singkat.`;
                
                const resultText = await callGeminiAPI(prompt);
                
                if (resultText) {
                    topicResult.textContent = resultText;
                    topicResult.classList.remove('hidden');
                }
                
                topicLoader.style.display = 'none';
                exploreTopicBtn.disabled = false;
            });
            
            const ctx = document.getElementById('wasteChart').getContext('2d');
            const wasteChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Plastik', 'Logam', 'Kaca', 'Kain', 'Karet', 'Lainnya'],
                    datasets: [{
                        label: '% Komposisi Sampah Laut',
                        data: [59, 5, 4, 4, 3, 25],
                        backgroundColor: [
                            'rgba(46, 83, 57, 0.7)', 'rgba(119, 136, 153, 0.7)', 'rgba(176, 196, 222, 0.7)',
                            'rgba(244, 164, 96, 0.7)', 'rgba(128, 128, 128, 0.7)', 'rgba(211, 211, 211, 0.7)'
                        ],
                        borderColor: [
                            'rgba(46, 83, 57, 1)', 'rgba(119, 136, 153, 1)', 'rgba(176, 196, 222, 1)',
                             'rgba(244, 164, 96, 1)', 'rgba(128, 128, 128, 1)', 'rgba(211, 211, 211, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    indexAxis: 'y', responsive: true, maintainAspectRatio: false,
                    plugins: { legend: { display: false }, tooltip: { callbacks: { label: (c) => `${c.dataset.label}: ${c.raw}%` } } },
                    scales: { x: { beginAtZero: true, title: { display: true, text: 'Persentase (%)' } }, y: { ticks: { autoSkip: false, callback: function(v) { const l = this.getLabelForValue(v); return l.length > 16 ? l.match(/.{1,16}/g) : l; } } } }
                }
            });
            
            showSection('beranda');
        });