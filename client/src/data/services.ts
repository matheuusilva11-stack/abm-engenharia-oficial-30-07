export interface ServiceBenefit {
  title: string;
  items: string[];
}

export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  image: string;
  fullDescription: string[];
  benefits: ServiceBenefit[];
  whatsappMessage: string;
}

export const companyInfo = {
  name: "ABM Engenharia",
  fullName: "ABM Engenharia e Automação LTDA",
  phone: "11975709785",
  phoneFormatted: "(11) 97570-9785",
  email: "engenharia@abm-eng.com.br",
  logo: "/logo.svg.png",
  whatsappNumber: "5511975709785",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const services: ServiceData[] = [
  {
    id: "1",
    slug: "pericias-e-assistencia-tecnica",
    title: "Perícias e Assistência Técnica",
    shortDescription:
      "Perícias técnicas, pareceres especializados, laudo e ART em processos judiciais e administrativos.",
    icon: "FileSearch",
    image: "/pericia.png",
    fullDescription: [
      "A ABM Engenharia oferece serviços de perícias técnicas, elaboração de pareceres especializados, laudo e ART, assistência técnica em processos judiciais, extrajudiciais e administrativos. Nossa atuação é fundamentada em critérios técnicos, normas regulamentadoras e boas práticas da engenharia, proporcionando análises imparciais, confiáveis e tecnicamente embasadas.",
      "Com experiência em diversos ramos da engenharia: automação, elétrica, mecânica, segurança do trabalho e inspeção de equipamentos industriais em diversos ramos como automotivo, farmacêutico, metalúrgico, alimentício, entre outros. Desenvolvemos avaliações detalhadas para identificar falhas, determinar causas de acidentes, verificar conformidades legais e fornecer suporte técnico para tomada de decisões, sempre com responsabilidade e precisão.",
      "A perícia técnica é indispensável quando existe a necessidade de esclarecer questões que exigem conhecimento especializado em engenharia. Seja para resolver conflitos, comprovar conformidade normativa ou investigar acidentes, uma análise técnica qualificada oferece segurança e credibilidade às decisões.",
      "As análises desenvolvidas pela ABM Engenharia seguem rigorosamente a legislação vigente e as normas técnicas aplicáveis a cada situação. Cada perícia é conduzida considerando as características específicas do equipamento, instalação ou processo analisado, garantindo conclusões técnicas consistentes e juridicamente fundamentadas.",
    ],
    benefits: [
      {
        title: "Principais Benefícios",
        items: [
          "Esclarecimento técnico em processos judiciais, administrativos e arbitrais",
          "Identificação das causas de falhas mecânicas, estruturais ou operacionais",
          "Verificação da conformidade de máquinas, equipamentos e instalações com a legislação vigente",
          "Determinação de responsabilidades técnicas em acidentes ou ocorrências",
          "Produção de laudos e pareceres que podem servir como prova técnica em processos judiciais",
          "Redução de riscos e prevenção de novos incidentes por meio de análises fundamentadas",
        ],
      },
      {
        title: "Quem Deve Contratar",
        items: [
          "Empresas industriais",
          "Condomínios",
          "Transportadoras",
          "Escritórios de advocacia",
          "Seguradoras",
          "Fabricantes de máquinas e equipamentos",
          "Órgãos públicos",
          "Empresas envolvidas em processos judiciais ou administrativos",
        ],
      },
      {
        title: "Normas Técnicas Aplicáveis",
        items: [
          "NR-11 – Transporte, Movimentação, Armazenagem e Manuseio de Materiais",
          "NR-12 – Segurança no Trabalho em Máquinas e Equipamentos",
          "NR-13 – Caldeiras, Vasos de Pressão, Tubulações e Tanques Metálicos",
          "NR-17 – Ergonomia",
          "NR-20 – Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis",
          "NR-35 – Trabalho em Altura",
          "Normas Técnicas da ABNT aplicáveis ao objeto da perícia",
        ],
      },
      {
        title: "Metodologia de Atuação",
        items: [
          "Levantamento das informações técnicas e documentais",
          "Inspeções presenciais em máquinas, equipamentos e instalações",
          "Registro fotográfico e coleta de evidências",
          "Avaliação das condições operacionais e de segurança",
          "Verificação da conformidade com normas regulamentadoras e técnicas",
          "Análise das causas de falhas, acidentes ou não conformidades",
          "Elaboração de parecer técnico ou laudo conclusivo",
        ],
      },
      {
        title: "Serviços Oferecidos",
        items: [
          "Perícias técnicas em máquinas e equipamentos industriais",
          "Avaliação técnica de sistemas mecânicos",
          "Investigação de acidentes de trabalho",
          "Análise de falhas mecânicas e estruturais",
          "Perícias em equipamentos de movimentação de cargas",
          "Elaboração de pareceres para processos judiciais e administrativos",
          "Análise crítica de laudos técnicos",
          "Avaliações técnicas independentes",
          "Acompanhamento de perícias judiciais e elaboração de quesitos técnicos",
          "Auditorias de conformidade em máquinas e equipamentos",
        ],
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de solicitar informações sobre Perícias e Assistência Técnica da ABM Engenharia.",
  },
  {
    id: "2",
    slug: "avcb-e-clcb",
    title: "AVCB e CLCB",
    shortDescription:
      "Auto de Vistoria do Corpo de Bombeiros e Certificado de Licença do Corpo de Bombeiros.",
    icon: "Flame",
    image: "/bg-avcb.png",
    fullDescription: [
      "Se você possui uma empresa, comércio, indústria ou condomínio, é fundamental garantir que sua edificação esteja em conformidade com as exigências do Corpo de Bombeiros. O Laudo de Incêndio, o AVCB e o CLCB são documentos e processos obrigatórios que comprovam que o imóvel atende rigorosamente às normas de segurança e combate a incêndios vigentes.",
      "O Laudo de Incêndio é um documento detalhado emitido por engenheiro habilitado atestando que os sistemas de segurança contra incêndio da edificação — tais como sinalizações de emergência, extintores, hidrantes, blocos de iluminação e saídas de emergência — estão operando perfeitamente e de acordo com a legislação. Este documento é essencial para processos de vistoria do Corpo de Bombeiros, exigências de seguradoras e fiscalizações municipais.",
      "O AVCB (Auto de Vistoria do Corpo de Bombeiros) é o documento final oficial emitido após a vistoria presencial dos bombeiros, certificando que a edificação possui todas as medidas de segurança físicas e estruturais exigidas pela lei. Já o CLCB (Certificado de Licença do Corpo de Bombeiros) é destinado às edificações classificadas como de baixo risco e menor complexidade, sendo emitido por meio de um procedimento simplificado.",
      "A ABM Engenharia realiza todo o processo de regularização junto ao Corpo de Bombeiros. Atuamos desde o levantamento inicial de campo, elaboração do Laudo de Incêndio detalhado, assessoria na execução de adequações, recolhimento da ART, até a aprovação e entrega em mãos do AVCB ou CLCB, garantindo conformidade jurídica, tranquilidade fiscal e segurança total para sua empresa.",
    ],
    benefits: [
      {
        title: "Quem Precisa do AVCB",
        items: [
          "Indústrias e galpões comerciais",
          "Edificações comerciais e lojas de médio/grande porte",
          "Condomínios residenciais e empresariais",
          "Escolas, clínicas, hospitais e hotéis",
          "Demais edificações enquadradas pela legislação estadual",
        ],
      },
      {
        title: "Quem Pode Solicitar o CLCB",
        items: [
          "Pequenos comércios e varejos",
          "Escritórios administrativos",
          "Sala comerciais individuais",
          "Estabelecimentos de baixo potencial de risco",
        ],
      },
      {
        title: "Documentos e Laudos Necessários",
        items: [
          "Laudo de Incêndio técnico detalhando o estado de todos os equipamentos de combate",
          "Projeto técnico de segurança contra incêndio aprovado",
          "ART (Anotação de Responsabilidade Técnica) assinada por engenheiro habilitado",
          "Plantas atualizadas da edificação",
          "Laudos de estanqueidade de gás, laudos elétricos (SPDA) e certificações dos sistemas instalados",
        ],
      },
      {
        title: "Riscos de Não Possuir a Documentação",
        items: [
          "Multas pesadas e autuações frequentes dos órgãos fiscalizadores",
          "Interdição parcial ou total imediata da edificação",
          "Dificuldades ou bloqueios na obtenção/renovação de alvarás de funcionamento",
          "Perda de cobertura de seguro em caso de sinistros (incêndios)",
          "Sérios riscos à integridade física e à segurança de todos os ocupantes",
        ],
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de solicitar informações sobre AVCB e CLCB da ABM Engenharia.",
  },
  {
    id: "3",
    slug: "projetos-executivos-cad-3d-2d",
    title: "Projetos Executivos em CAD 3D, 2D",
    shortDescription:
      "Desenhos técnicos profissionais em CAD 2D e modelagem 3D para projetos de engenharia.",
    icon: "PenTool",
    image: "/bg-cad.png",
    fullDescription: [
      "Desenvolvemos projetos detalhados em ambiente CAD (2D e 3D) para atender às necessidades específicas de fabricação, montagem, modificação e documentação técnica de equipamentos e sistemas mecânicos industriais.",
      "Nossa equipe utiliza software de ponta para garantir precisão dimensional, compatibilidade com processos industriais e total aderência às normas técnicas aplicáveis. Cada projeto é executado considerando as particularidades do cliente, desde a concepção até a entrega final da documentação técnica completa.",
      "Trabalhamos com modelagem paramétrica, permitindo ajustes rápidos e iterações eficientes durante o desenvolvimento do projeto. A documentação gerada é completa e pronta para uso em processos de fabricação, montagem e certificação.",
    ],
    benefits: [
      {
        title: "Nossas Soluções em CAD",
        items: [
          "Modelagem tridimensional (3D) de peças, componentes e conjuntos mecânicos",
          "Detalhamento bidimensional (2D) para fabricação de acordo com as normas técnicas",
          "Conversão de desenhos físicos ou antigos para formato digital (vetorização)",
          "Projetos de dispositivos auxiliares, estruturas metálicas e suportes",
          "Layouts de plantas industriais e arranjo físico de equipamentos",
          "Geração de arquivos prontos para processos de corte a laser, plasma e usinagem",
        ],
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de solicitar informações sobre Projetos Executivos em CAD 3D e 2D da ABM Engenharia.",
  },
  {
    id: "4",
    slug: "reclassificacao-de-monta-e-desmanche",
    title: "Reclassificação de Monta e Desmanche",
    shortDescription:
      "Análise técnica e reclassificação de veículos em processo de montagem e desmanche.",
    icon: "Car",
    image: "/bg-monta.png",
    fullDescription: [
      "A ABM Engenharia oferece soluções especializadas em engenharia automotiva para proprietários de veículos, empresas e estabelecimentos credenciados, atuando diretamente na emissão de Laudo de Recuperabilidade, recolhimento de ART (Anotação de Responsabilidade Técnica), processos de Reclassificação de Monta e fornecimento de Responsável Técnico para Desmanches e Desmontadoras de Veículos.",
      "Nossos serviços são executados por Engenheiro Mecânico legalmente habilitado, com foco rigoroso na conformidade legal, responsabilidade técnica e segurança veicular, atendendo perfeitamente a todas as exigências da legislação vigente e dos órgãos de trânsito competentes. Atuamos com transparência e agilidade para oferecer o melhor respaldo técnico profissional para o seu caso.",
      "A reclassificação de monta é um procedimento de caráter técnico e administrativo destinado à revisão da classificação dos danos atribuídos a um veículo após a ocorrência de um sinistro. Em determinadas situações, a classificação registrada inicialmente pela autoridade policial pode não representar fielmente o real estado das condições estruturais do veículo.",
      "O Laudo de Recuperabilidade é o documento final emitido após a perícia no veículo. Nele, registramos as avarias identificadas, as análises de soldas e estruturas e apresentamos um parecer técnico conclusivo atestando que o veículo reúne todas as condições técnicas para ser plenamente recuperado e voltar a rodar com segurança. A ART emitida junto ao Crea formaliza a responsabilidade técnica do Engenheiro Mecânico sobre a avaliação efetuada.",
    ],
    benefits: [
      {
        title: "Quando a Reclassificação é Necessária",
        items: [
          "Contestação e revisão de classificação de média monta",
          "Processos de regularização e desbloqueio documental de veículos sinistrados",
          "Instrução técnica de processos administrativos perante o DETRAN",
          "Necessidade de emissão urgente de Laudo de Recuperabilidade Veicular",
          "Recolhimento de ART técnica exigida pelo órgão de trânsito estadual",
        ],
      },
      {
        title: "Itens Avaliados na Inspeção Veicular",
        items: [
          "Integridade física do monobloco ou chassi",
          "Alinhamento estrutural e condições das longarinas e travessas",
          "Presença de deformações em colunas estruturais e caixas de roda",
          "Alinhamento do painel corta-fogo, assoalho e teto",
          "Sistemas de suspensão, eixos e pontos críticos de fixação mecânica",
          "Integridade de soldas estruturais de fábrica e qualidade de reparos anteriores",
          "Conformidade dos componentes ativos de segurança veicular",
        ],
      },
      {
        title: "Responsável Técnico para Desmanches — Atribuições",
        items: [
          "Acompanhamento e supervisão técnica detalhada das atividades de desmontagem de veículos",
          "Avaliação de conformidade e supervisão técnica no reaproveitamento e reciclagem de peças",
          "Orientação às equipes internas para o correto atendimento das exigências legais",
          "Emissão de ART de Responsabilidade Técnica anual junto ao conselho de classe",
          "Suporte e assessoria presencial durante auditorias e fiscalizações de órgãos públicos",
          "Manutenção e controle documental para garantir a regularidade de funcionamento",
        ],
      },
      {
        title: "O Que o Cliente Recebe",
        items: [
          "Relatório fotográfico datado e detalhado das inspeções realizadas",
          "Laudo de Recuperabilidade Veicular estruturado dentro das normas do CONTRAN",
          "Parecer técnico conclusivo assinado por Engenheiro Mecânico",
          "ART (Anotação de Responsabilidade Técnica) emitida no CREA",
          "Contrato técnico de Responsável Técnico para Desmanches com assessoria contínua",
        ],
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de solicitar informações sobre Reclassificação de Monta e Desmanche da ABM Engenharia.",
  },
  {
    id: "5",
    slug: "sistemas-transportadores-e-nr11",
    title: "Sistemas Transportadores e NR-11",
    shortDescription:
      "Análise e conformidade de sistemas transportadores conforme Norma Regulamentadora NR-11.",
    icon: "Factory",
    image: "/bg-nr11.png",
    fullDescription: [
      "A Norma Regulamentadora NR-11 estabelece os requisitos de segurança para as atividades de transporte, movimentação, armazenagem e manuseio de materiais, visando proteger os trabalhadores e garantir que equipamentos e processos operem de forma segura e eficiente.",
      "Empresas que utilizam empilhadeiras, pontes rolantes, talhas, guindastes, sistemas transportadores, elevadores de carga e demais equipamentos de movimentação devem atender às exigências da NR-11, reduzindo riscos de acidentes, aumentando a confiabilidade das operações e mantendo conformidade com a legislação vigente.",
      "A adequação à NR-11 é essencial para garantir um ambiente de trabalho seguro, prevenir acidentes e evitar penalidades. Os laudos e inspeções devem ser elaborados por profissional habilitado junto ao CREA, verificando condições estruturais e mecânicas dos equipamentos, dispositivos de segurança e proteção, sistemas de comando e operação, sinalização e identificação, e riscos operacionais existentes.",
    ],
    benefits: [
      {
        title: "Benefícios da Adequação à NR-11",
        items: [
          "Redução dos riscos de acidentes envolvendo equipamentos de movimentação",
          "Atendimento às exigências das normas e legislação trabalhista",
          "Maior segurança para operadores e colaboradores",
          "Redução de custos com afastamentos e processos",
          "Aumento da vida útil dos equipamentos via inspeções periódicas",
          "Maior confiabilidade e eficiência operacional",
        ],
      },
      {
        title: "Nossos Serviços",
        items: [
          "Inspeção técnica completa de equipamentos de movimentação",
          "Emissão de laudos com ART",
          "Avaliação de sistemas transportadores",
          "Treinamentos para equipe de operação",
          "Consultoria completa em conformidade NR-11",
        ],
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de solicitar informações sobre Sistemas Transportadores e NR-11 da ABM Engenharia.",
  },
  {
    id: "6",
    slug: "maquinas-pesadas",
    title: "Máquinas Pesadas",
    shortDescription:
      "Inspeção, análise e conformidade de máquinas pesadas como escavadeiras, munks e equipamentos similares.",
    icon: "Truck",
    image: "/bg-maquinas.png",
    fullDescription: [
      "O Laudo Técnico de Máquinas Pesadas avalia as condições estruturais, mecânicas, hidráulicas e operacionais do seu equipamento, emitindo a respectiva ART. Este laudo é amplamente exigido para financiamentos, seguros e auditorias de segurança.",
      "Nossa inspeção é rigorosa e abrangente, avaliando cada componente crítico do equipamento para garantir que ele esteja em condições seguras e operacionais adequadas. O relatório completo inclui registro fotográfico detalhado e a ART (Anotação de Responsabilidade Técnica) que formaliza juridicamente a avaliação.",
      "Emitimos laudos para uma ampla gama de equipamentos industriais, garantindo que cada máquina esteja devidamente documentada e em conformidade com as exigências legais, seguradoras e instituições financeiras.",
    ],
    benefits: [
      {
        title: "O Que é Avaliado",
        items: [
          "Integridade estrutural de chassis, lanças e eixos",
          "Condições de soldas e trincas",
          "Sistemas hidráulicos e vazamentos",
          "Motor, transmissão e freios",
          "Dispositivos de segurança ativos e passivos",
          "Estado de pneus, esteiras e cabos de aço",
        ],
      },
      {
        title: "Equipamentos Atendidos",
        items: [
          "Caminhão Munck",
          "Escavadeiras Hidráulicas",
          "Retroescavadeiras",
          "Pás Carregadeiras",
          "Tratores Agrícolas e de Esteira",
          "Motoniveladoras",
          "Empilhadeiras",
        ],
      },
      {
        title: "Quando Emitir o Laudo",
        items: [
          "Financiamentos e crédito bancário",
          "Contratos de seguro",
          "Inspeção periódica obrigatória",
          "Processos judiciais e perícias técnicas",
          "Controle patrimonial",
        ],
      },
      {
        title: "Vantagens",
        items: [
          "Redução de riscos jurídicos",
          "Valorização de mercado para venda",
          "Aprovação em financiamentos",
          "Evita multas pesadas",
        ],
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de solicitar informações sobre Máquinas Pesadas da ABM Engenharia.",
  },
  {
    id: "7",
    slug: "sistema-de-ar-condicionado-pmoc",
    title: "Sistema de Ar Condicionado PMOC",
    shortDescription:
      "Inspeção e conformidade de sistemas de ar condicionado conforme PMOC (Programa de Manutenção, Operação e Controle).",
    icon: "Wind",
    image: "/bg-pmoc.png",
    fullDescription: [
      "O PMOC (Plano de Manutenção, Operação e Controle) é um conjunto de procedimentos técnicos destinado a garantir o funcionamento adequado dos sistemas de climatização, preservando a qualidade do ar interno, a eficiência dos equipamentos e a segurança dos ocupantes do ambiente.",
      "Além de atender às exigências da legislação vigente, um PMOC bem estruturado reduz falhas operacionais, aumenta a vida útil dos equipamentos, diminui o consumo de energia e proporciona ambientes mais saudáveis para colaboradores, clientes e visitantes.",
      "O PMOC deve ser desenvolvido e acompanhado por um profissional legalmente habilitado, responsável pela avaliação técnica do sistema e pela definição das rotinas de manutenção conforme as características da instalação. Nossa equipe atua com responsabilidade técnica, experiência e compromisso com a qualidade dos serviços prestados.",
    ],
    benefits: [
      {
        title: "Benefícios do PMOC",
        items: [
          "Atendimento às normas legais e conformidade com órgãos fiscalizadores",
          "Melhoria da qualidade do ar interno",
          "Economia de energia elétrica",
          "Maior vida útil dos equipamentos",
          "Segurança e confiabilidade operacional",
          "Redução de riscos à saúde ocupacional",
        ],
      },
      {
        title: "Nossos Serviços de PMOC",
        items: [
          "Elaboração do PMOC",
          "Manutenção Preventiva",
          "Manutenção Corretiva",
          "Avaliação da Qualidade do Ar",
          "Inspeções Técnicas",
          "Emissão de Relatórios Técnicos",
          "Adequação às Exigências Legais",
          "Consultoria Técnica",
        ],
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de solicitar informações sobre Sistema de Ar Condicionado PMOC da ABM Engenharia.",
  },
  {
    id: "8",
    slug: "pgd-playground-e-brinquedos",
    title: "PGD (Playground e Brinquedos)",
    shortDescription:
      "Inspeção e conformidade de playgrounds e equipamentos de brinquedos conforme normas técnicas.",
    icon: "ToyBrick",
    image: "/bg-playground.png",
    fullDescription: [
      "Os playgrounds e brinquedos infantis são espaços destinados ao lazer e ao desenvolvimento das crianças. Para que possam ser utilizados com total segurança, é fundamental que seus componentes permaneçam em excelentes condições de conservação, estabilidade e pleno funcionamento, em conformidade com as normas vigentes.",
      "Com o passar do tempo, fatores como uso frequente, intempéries e falta de manutenção adequada podem provocar desgastes severos, corrosão, folgas e outros problemas estruturais que aumentam significativamente o risco de acidentes graves. Por isso, a realização de inspeções técnicas periódicas é essencial para identificar não conformidades e orientar as devidas correções.",
      "A ABM Engenharia realiza inspeções técnicas detalhadas em playgrounds e brinquedos infantis instalados em condomínios e escolas, emitindo o Laudo Técnico de Playground acompanhado da respectiva ART (Anotação de Responsabilidade Técnica), emitida por Engenheiro Mecânico legalmente habilitado.",
      "O Laudo Técnico para Playground é um documento técnico oficial elaborado após uma inspeção física rigorosa dos brinquedos de recreação, registrando formalmente suas condições estruturais, mecânicas, de fixação e de segurança geral de acordo com as normas da ABNT aplicáveis (como a NBR 16071).",
    ],
    benefits: [
      {
        title: "Itens Inspecionados",
        items: [
          "Integridade estrutural de pilares, colunas e vigas de sustentação",
          "Condições de soldas, uniões mecânicas, parafusos expostos ou soltos",
          "Fixação segura dos brinquedos ao piso e ancoragem das fundações",
          "Desgaste de cabos de aço, correntes, ganchos e elementos móveis",
          "Condições físicas de escadas, corrimãos, plataformas e guarda-corpos",
          "Integridade de escorregadores, balanços, gangorras e gira-giras",
          "Qualidade de componentes metálicos, madeiras e plásticos",
          "Presença de oxidação profunda, corrosão ou pintura desgastada",
          "Estabilidade dinâmica do conjunto sob carga operacional",
          "Identificação de riscos de aprisionamento de dedos, cabeça, esmagamento ou arestas cortantes",
        ],
      },
      {
        title: "Benefícios da Inspeção Periódica",
        items: [
          "Segurança absoluta: redução drástica do risco de acidentes",
          "Identificação precoce de trincas estruturais ou desgastes invisíveis",
          "Redução de custos com manutenção preventiva",
          "Aumento da vida útil das estruturas",
          "Segurança jurídica com laudo e ART oficial",
        ],
      },
      {
        title: "Onde Atendemos",
        items: [
          "Condomínios residenciais e empresariais",
          "Escolas particulares, municipais e creches infantis",
          "Buffets infantis e casas de festas",
          "Clubes recreativos, hotéis, pousadas e resorts",
          "Shopping Centers, praças públicas e parques privados",
          "Empresas com espaços de lazer familiar",
        ],
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de solicitar informações sobre PGD (Playground e Brinquedos) da ABM Engenharia.",
  },
  {
    id: "9",
    slug: "linha-de-vida-e-ancoragem-nr35",
    title: "Linha de Vida e Ancoragem NR35",
    shortDescription:
      "Inspeção e conformidade de sistemas de linha de vida e ancoragem conforme Norma Regulamentadora NR-35.",
    icon: "ShieldCheck",
    image: "/bg-linha.png",
    fullDescription: [
      "Projetos, inspeções periódicas, ensaios não-destrutivos (teste de arrancamento estático) e certificações completas de sistemas de linha de vida e pontos de ancoragem para trabalhos em altura, garantindo total segurança operacional e pleno atendimento às normas NR-35, NR-18 e ABNT.",
      "As linhas de vida e pontos de ancoragem são os equipamentos de segurança que impedem quedas fatais de colaboradores que atuam em telhados, fachadas ou carregamentos de caminhões. Por ficarem expostos a intempéries e cargas constantes, a legislação exige que estes sistemas passem por uma inspeção e recertificação obrigatória a cada 12 meses.",
      "Nossa equipe de engenharia realiza o cálculo estrutural dos pontos, testes físicos de tração nas fixações (arrancamento estático) e emite o parecer técnico de integridade, fornecendo o Laudo Técnico e a devida ART para assegurar a conformidade da sua instalação e a proteção das vidas envolvidas.",
    ],
    benefits: [
      {
        title: "O Que Incluímos",
        items: [
          "Cálculo estrutural dos pontos de ancoragem",
          "Testes físicos de tração nas fixações (arrancamento estático)",
          "Inspeção visual e dimensional completa do sistema",
          "Verificação de conformidade com NR-35, NR-18 e ABNT",
          "Emissão de Laudo Técnico com ART",
          "Recertificação anual obrigatória",
          "Parecer técnico de integridade",
        ],
      },
      {
        title: "Importância da Inspeção Anual",
        items: [
          "Atendimento à exigência legal de recertificação a cada 12 meses",
          "Garantia de funcionamento do sistema em caso de queda",
          "Identificação de desgastes por intempéries e cargas constantes",
          "Proteção da integridade física dos colaboradores",
          "Segurança jurídica para a empresa e diretoria",
        ],
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de solicitar informações sobre Linha de Vida e Ancoragem NR35 da ABM Engenharia.",
  },
  {
    id: "10",
    slug: "relatorios-tecnicos-de-conformidade",
    title: "Relatórios Técnicos de Conformidade",
    shortDescription:
      "Elaboração de relatórios técnicos abrangentes para demonstrar conformidade com normas e legislação.",
    icon: "ClipboardCheck",
    image: "/bg-relatorio.png",
    fullDescription: [
      "Através de análises criteriosas, medições de engenharia, inspeções visuais e verificações de projetos, nossos relatórios garantem a conformidade operacional de sua empresa. Isso reduz drasticamente os riscos de acidentes e assegura a integridade física dos colaboradores e dos sistemas avaliados.",
      "Trata-se de um suporte técnico indispensável e altamente confiável para tomadas de decisão, adequações físicas de plantas industriais, auditorias externas, exigências de seguradoras e certificações regulamentares, sempre acompanhado da emissão de ART (Anotação de Responsabilidade Técnica).",
      "Nossos relatórios são elaborados com rigor técnico, fundamentação normativa e clareza na apresentação das informações, permitindo que gestores, diretores e equipes jurídicas tenham subsídios técnicos sólidos para decisões estratégicas e operacionais.",
    ],
    benefits: [
      {
        title: "O Que Incluímos",
        items: [
          "Análises criteriosas e medições de engenharia",
          "Inspeções visuais e verificações de projetos",
          "Verificação de conformidade com normas e legislação",
          "Adequações físicas de plantas industriais",
          "Suporte para auditorias externas e exigências de seguradoras",
          "Certificações regulamentares com ART",
          "Documentação técnica completa para tomada de decisão",
        ],
      },
      {
        title: "Aplicações",
        items: [
          "Tomadas de decisão técnicas e gerenciais",
          "Adequações de plantas industriais",
          "Auditorias externas e internas",
          "Exigências de seguradoras",
          "Certificações regulamentares",
          "Comprovação de conformidade legal",
        ],
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de solicitar informações sobre Relatórios Técnicos de Conformidade da ABM Engenharia.",
  },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
  services.find((s) => s.slug === slug);
