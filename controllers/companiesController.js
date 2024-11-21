// Dados fixos das empresas, serviços e horários
const companies = [
    {
        id: 1,
        name: "Barbearia Clássica",
        services: [
            { id: 101, name: "Corte de Cabelo", professionals: ["João", "Pedro"], schedule: ["10:00", "11:00", "14:00"] },
            { id: 102, name: "Barba", professionals: ["Carlos"], schedule: ["09:00", "13:00", "15:00"] },
        ],
    },
    {
        id: 2,
        name: "Estúdio de Beleza Elegance",
        services: [
            { id: 201, name: "Manicure", professionals: ["Ana"], schedule: ["09:00", "10:30", "15:00"] },
            { id: 202, name: "Maquiagem", professionals: ["Mariana"], schedule: ["11:00", "13:00"] },
        ],
    },
    {
        id: 3,
        name: "Clínica Spa Relax",
        services: [
            { id: 301, name: "Massagem", professionals: ["Paula"], schedule: ["08:00", "12:00", "16:00"] },
            { id: 302, name: "Terapia Facial", professionals: ["Roberta"], schedule: ["10:00", "14:00"] },
        ],
    },
];

// Listar todas as empresas
const getAllCompanies = (req, res) => {
    const companyList = companies.map(company => ({ id: company.id, name: company.name }));
    res.status(200).send(companyList);
};

// Obter serviços e profissionais de uma empresa específica
const getCompanyServices = (req, res) => {
    const companyId = parseInt(req.params.id);
    const company = companies.find(c => c.id === companyId);

    if (!company) {
        return res.status(404).send("Empresa não encontrada.");
    }

    res.status(200).send({
        companyName: company.name,
        services: company.services.map(service => ({
            id: service.id,
            name: service.name,
            professionals: service.professionals,
        })),
    });
};

// Obter horários disponíveis de um serviço específico
const getServiceSchedule = (req, res) => {
    const companyId = parseInt(req.params.companyId);
    const serviceId = parseInt(req.params.serviceId);

    const company = companies.find(c => c.id === companyId);
    if (!company) {
        return res.status(404).send("Empresa não encontrada.");
    }

    const service = company.services.find(s => s.id === serviceId);
    if (!service) {
        return res.status(404).send("Serviço não encontrado.");
    }

    res.status(200).send({
        serviceName: service.name,
        professionals: service.professionals,
        availableTimes: service.schedule,
    });
};

module.exports = {
    getAllCompanies,
    getCompanyServices,
    getServiceSchedule,
};