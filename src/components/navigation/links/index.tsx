import {
  Typography,
  Box,
  Card,
  CardContent,
  Link,
  Grid,
  Avatar,
} from '@mui/material';
import './styles.scss';

function Links() {
  const links = [
    {
      href: 'https://out-of-the-boxthinking.blogspot.com/p/dados-de-mercado.html',
      label: 'Out-of-the-Box Thinking – Dados de Mercado',
      icon: 'https://out-of-the-boxthinking.blogspot.com/favicon.ico', // Favicon do site
      siteName: 'Out-of-the-Box Thinking',
      title: 'Dados de Mercado',
    },
    {
      href: 'https://insights-reports.s3.fr-par.scw.cloud/alfredo_insights_report_05_2024_pt.pdf',
      label: 'Alfredo – Índice de Preços Residencial – Abril 2024',
      icon: 'https://alfredo.pt/favicon-32x32.png?v=0099216a7975d087af7f418d00b209c2', // Favicon estimado
      siteName: 'Alfredo Insights',
      title: 'Índice de Preços Residencial – Abril 2024',
    },
    {
      href: 'https://refresh-bee-production.s3.amazonaws.com/beefree/images/9b7fc03e574f2874a21419306251354ccf95912d2e773ef8c2bf9b0f8a3ea7e9/AVIV%20Housing%20market%20report%20-%20Q1%202024%20%281%29.pdf',
      label: 'AVIV Housing Market Report – Q1 2024',
      icon: 'data:image/webp;base64,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',
      siteName: 'AVIV Housing',
      title: 'Housing Market Report – Q1 2024',
    },
    {
      href: 'https://20029864.fs1.hubspotusercontent-na1.net/hubfs/20029864/Reports/Real%20Estate/2024/BONARD%20-%20Portugal%20Student%20Housing%20Market%20Report%202024.pdf',
      label: 'BONARD – Portugal Student Housing Market Report 2024',
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAwklEQVR4AWJwL/CBY3nnaQDe6sACYBiIwvAGN84t0iW6QKbIBjdBAbJK1sgQ6aGI8EIT7/CD0k/TuzZ55WePl71ruBdsBovXD8s8EFeJIEZ5IE53Qfuuy5R6dQE+RyDKrzd0rCzwjgav6CM1wtBATBlrYcOT5CE0oW2CtsGOw++NCVZPqCCosEE8NIQpTQvUqF8akJyBoAV4R4PGOFKJBusCTCdrkaYy+hcOKX8P8S7SQYkE9d1gqS0IN/VhmZcaTX0A3UKmXbmr2tMAAAAASUVORK5CYII=',
      siteName: 'BONARD',
      title: 'Portugal Student Housing Market Report 2024',
    },
    {
      href: 'https://storage.googleapis.com/infabode2_pro/uploads/post/documents/957817/original-957817.pdf?v=63879888524',
      label: 'Infabode – Real Estate Report 2024',
      icon: 'https://storage.googleapis.com/favicon.ico', // Estimado
      siteName: 'Infabode',
      title: 'Real Estate Report 2024',
    },
    {
      href: 'https://www.savills.co.uk/research_articles/229130/362618-0',
      label: 'Savills – European Living & Hotels Investor Survey Results',
      icon: 'https://www.savills.co.uk/favicon.ico',
      siteName: 'Savills',
      title: 'European Living & Hotels Investor Survey Results',
    },
    {
      href: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cfi/Pages/codigo-fiscal-do-investimento-indice.aspx',
      label: 'Portal das Finanças – Código Fiscal do Investimento',
      icon: 'https://info.portaldasfinancas.gov.pt/_layouts/15/images/favicon.ico?rev=23',
      siteName: 'Portal das Finanças',
      title: 'Código Fiscal do Investimento',
    },
    {
      href: 'https://www.comparaja.pt/credito-habitacao/comprar-casa/resultados?comingFromFunnel=1&wantToBorrow=135000&wantToBorrowTime=30&propertyValue=150000&borrowingPercentage=90&loanType=acquisition&employmentStatus=privateFullTimeEmployment&bankRelationship=BMTP&bankRelationship=ACBA&bankRelationship=SDTT&monthlyIncome=1300&buyingCycle=looking&monthlyExpenses=500&journeyId=f560728e-8e8d-45f2-8c72-37d209d1e377',
      label: 'Comparaja – Comparação de Créditos Habitação',
      icon: 'https://www.comparaja.pt/favicon.ico',
      siteName: 'Comparaja',
      title: 'Comparação de Créditos Habitação',
    },
    {
      href: 'https://clientebancario.bportugal.pt/pt-pt/direitos-e-deveres-na-utilizacao-de-cartoes',
      label: 'Banco de Portugal – Direitos e Deveres na Utilização de Cartões',
      icon: 'https://clientebancario.bportugal.pt/themes/reditus/favicon.ico',
      siteName: 'Banco de Portugal',
      title: 'Direitos e Deveres na Utilização de Cartões',
    },
    {
      href: 'https://dre.pt/home/-/dre/499204/details/maximized',
      label: 'Diário da República – Decreto-Lei nº 499/204',
      icon: 'https://diariodarepublica.pt/dr/img/dr.favicon.png',
      siteName: 'Diário da República',
      title: 'Decreto-Lei nº 499/204',
    },
    {
      href: 'https://www.idealista.pt/media/relatorios-preco-habitacao/',
      label: 'Idealista – Relatórios de Preço de Habitação',
      icon: 'https://www.idealista.pt/favicon.ico',
      siteName: 'Idealista',
      title: 'Relatórios de Preço de Habitação',
    },
    {
      href: 'https://www2.deloitte.com/content/dam/Deloitte/pt/Documents/tax/guia-de-reabilitacao-urbana.pdf',
      label: 'Deloitte – Guia de Reabilitação Urbana',
      icon: 'https://www.deloitte.com/favicon.ico',
      siteName: 'Deloitte',
      title: 'Guia de Reabilitação Urbana',
    },
    {
      href: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/Cod_download/Documents/CIMI.pdf',
      label:
        'Portal das Finanças – Código do Imposto Municipal sobre Imóveis (CIMI)',
      icon: 'https://info.portaldasfinancas.gov.pt/_layouts/15/images/favicon.ico?rev=23',
      siteName: 'Portal das Finanças',
      title: 'Código do Imposto Municipal sobre Imóveis (CIMI)',
    },
  ];

  const leftColumnLinks = links.slice(0, 6);
  const rightColumnLinks = links.slice(6);

  return (
    <Box className="links">
      <Typography variant="h6" className="links__title">
        Useful links
      </Typography>
      <Grid container spacing={2} sx={{ padding: '20px 30px' }}>
        <Grid item xs={12} sm={6}>
          {leftColumnLinks.map((linkItem, index) => (
            <Link
              target="_blank"
              href={linkItem.href}
              sx={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Card
                key={index}
                sx={{
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3294117647)',
                  height: '75px',
                  padding: '10px',
                }}
              >
                <Avatar
                  src={linkItem.icon}
                  alt={`${linkItem.label} icon`}
                  variant="square"
                  sx={{
                    marginRight: '10px',
                    marginLeft: '20px',
                    width: '30px',
                    height: '30px',
                  }}
                />
                <CardContent sx={{ marginTop: '5px' }}>
                  <Typography variant="subtitle2" color="textSecondary">
                    {linkItem.siteName}
                  </Typography>

                  <Typography display="block">{linkItem.title}</Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Grid>
        <Grid item xs={12} sm={6}>
          {rightColumnLinks.map((linkItem, index) => (
            <Link
              target="_blank"
              href={linkItem.href}
              sx={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Card
                key={index}
                sx={{
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3294117647)',
                  height: '75px',
                  padding: '10px',
                }}
              >
                <Avatar
                  src={linkItem.icon}
                  alt={`${linkItem.label} icon`}
                  variant="square"
                  sx={{
                    marginRight: '10px',
                    marginLeft: '20px',
                    width: '30px',
                    height: '30px',
                  }}
                />
                <CardContent sx={{ marginTop: '5px' }}>
                  <Typography variant="subtitle2" color="textSecondary">
                    {linkItem.siteName}
                  </Typography>
                  <Typography display="block">{linkItem.title}</Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Links;
