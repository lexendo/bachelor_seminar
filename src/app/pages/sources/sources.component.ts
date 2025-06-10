import { Component } from '@angular/core';

@Component({
  selector: 'app-sources',
  standalone: false,
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent {
  categories = [
    {
      title: 'Frontend',
      links: [
        { label: 'HTML dokumentácia', url: 'https://html.spec.whatwg.org/' },
        { label: 'CSS dokumentácia', url: 'https://www.w3.org/Style/CSS/' },
        { label: 'JavaScript (ECMAScript)', url: 'https://tc39.es/ecma262/' },
        { label: 'TypeScript dokumentácia', url: 'https://www.typescriptlang.org/docs/' },
        { label: 'React dokumentácia', url: 'https://react.dev/learn' },
        { label: 'Material UI dokumentácia', url: 'https://mui.com/material-ui/getting-started/' },
        { label: 'TinyMCE editor dokumentácia', url: 'https://www.tiny.cloud/docs/' }
      ]
    },
    {
      title: 'Backend',
      links: [
        { label: 'ASP.NET Core dokumentácia', url: 'https://learn.microsoft.com/en-us/aspnet/core/' },
        { label: 'C# dokumentácia', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
        { label: 'Entity Framework Core', url: 'https://learn.microsoft.com/en-us/ef/core/' }
      ]
    },
    {
      title: 'Databáza',
      links: [
        { label: 'PostgreSQL dokumentácia', url: 'https://www.postgresql.org/docs/' }
      ]
    },
    {
      title: 'Autentifikácia & API',
      links: [
        { label: 'JWT (JSON Web Tokens) dokumentácia', url: 'https://jwt.io/introduction' },
        { label: 'Swagger (OpenAPI)', url: 'https://swagger.io/docs/' }
      ]
    },
    {
      title: 'Teória práce',
      links: [
        { label: 'Learning management systems – Ellis (2009)', url: '' },
        { label: 'Applying an LMS to Large Language Classes – Grew et al. (2004)', url: '' },
        { label: 'LMS in academic and corporate education – Shurygin et al. (2021)', url: '' },
        { label: 'The LMS Moodle: A usability evaluation – Melton (2006)', url: '' },
        { label: 'Moodle Documentation', url: 'https://docs.moodle.org/500/en/Main_page' },
        { label: 'Ako funguje elearning cez Moodle na UK', url: 'https://moodle.uniba.sk/local/staticpage/view.php?page=ako_funguje_elearning_cez_moodle' },
        { label: 'Learning LMS based on Moodle – Simanullang & Rajagukguk (2020)', url: '' },
        { label: 'Google Classroom Help', url: 'https://support.google.com/edu/classroom' },
        { label: 'How Google Conquered the Classroom – Bouchrika (2025)', url: 'https://research.com/education/how-google-conquered-the-classroom' },
        { label: 'Grader iframe overview – Google Developers', url: 'https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/grader-iframe' },
        { label: 'Modular Architecture in AI – Mittal et al. (2022)', url: 'https://proceedings.neurips.cc/paper_files/paper/2022/file/b8d1d741f137d9b6ac4f3c1683791e4a-Paper-Conference.pdf' },
        { label: 'Monolithic vs. microservice architecture – Blinowski et al. (2022)', url: '' },
        { label: 'Microservices architecture survey – Velepucha & Flores (2023)', url: '' },
        { label: 'API Protocols in 2023 – Alex Xu (Postman)', url: 'https://blog.postman.com/api-protocols-in-2023/' },
        { label: 'Bakalárska práca LIST – Andrej Jursa (2013)', url: 'https://opac.crzp.sk/?fn=detailBiblioFormChildE1V9QF&sid=E17FC85307AF86FA32C0B9535D4A' },
        { label: 'Diplomová práca LIST – Andrej Jursa (2015)', url: 'https://opac.crzp.sk/?fn=detailBiblioForm&sid=06ED14E8665C76DEA6C55894DD38' },
        { label: 'C# Language Specification – Hejlsberg et al. (2003)', url: '' }
      ]
    }
  ];
}
