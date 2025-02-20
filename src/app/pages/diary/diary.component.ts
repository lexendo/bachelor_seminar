import { Component } from '@angular/core';
import { startOfWeek, parse } from 'date-fns';

@Component({
  selector: 'app-diary',
  standalone: false,
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent {
  diaryEntries = [
    { date: '22.2.', description: 'Analýza a spísanie všetkých aktuálnych funkcionalít systému L.I.S.T', type: 'Príprava' },
    { date: '22.2.', description: 'Študovanie Jursových prác (tvorca systému L.I.S.T)', type: 'Príprava' },
    { date: '25.2.', description: 'Hľadanie chýbajúcich funkcionalít systému L.I.S.T', type: 'Príprava' },
    { date: '1.3.', description: 'Výber technológií React, C# .net, posgreSQL', type: 'Príprava' },
    { date: '1.3.', description: 'Rozdelenie funkcionalít do modulov', type: 'Príprava' },
    { date: '4.3.', description: 'Tvorba aplikácie na spoznanie tech stacku – (časť 1)', type: 'Príprava' },
    { date: '8.3.', description: 'Tvorba aplikácie na spoznanie tech stacku – (časť 2)', type: 'Príprava' },
    { date: '10.3.', description: 'Návrh dátového modelu', type: 'Príprava' },
    { date: '12.3.', description: 'Implementácia notifikačného komponentu pomocou Material UI', type: 'Implementácia' },
    { date: '15.3.', description: 'Implementácia JWT autentifikácie a interceptoru', type: 'Implementácia' },
    { date: '15.3.', description: 'Ochrana endpointov podľa roly používateľa', type: 'Implementácia' },
    { date: '20.3.', description: 'Restrukturalizácia frontend projektu do modulárnej štruktúry', type: 'Implementácia' },
    { date: '22.3.', description: 'Písanie bakalárskej práce', type: 'Písanie' },
    { date: '25.3.', description: 'Pridanie EmptyState komponentu pre prázdne stavy', type: 'Implementácia' },
    { date: '27.3.', description: 'Implementácia študentskej úvodnej obrazovky s kurzami', type: 'Implementácia' },
    { date: '27.3.', description: 'Filtrovanie kurzov podľa obdobia a vyhľadávanie', type: 'Implementácia' },
    { date: '30.3.', description: 'Implementácia študentského rozhrania pre kurzy', type: 'Implementácia' },
    { date: '2.4.', description: 'Písanie bakalárskej práce', type: 'Písanie' },
    { date: '5.4.', description: 'Zlepšenie responzivity sidebar pre mobilné zariadenia', type: 'Implementácia' },
    { date: '7.4.', description: 'Implementácia základného CRUD pre úlohy', type: 'Implementácia' },
    { date: '7.4.', description: 'Pridanie editoru a preview pre úlohy', type: 'Implementácia' },
    { date: '12.4.', description: 'Vytvorenie relácie medzi používateľmi a úlohami', type: 'Implementácia' },
    { date: '15.4.', description: 'Písanie bakalárskej práce', type: 'Písanie' },
    { date: '18.4.', description: 'Pridanie možnosti nahrávať obrázky do úloh', type: 'Implementácia' },
    { date: '20.4.', description: 'Rozšírenie task editoru o formátovanie textu', type: 'Implementácia' },
    { date: '22.4.', description: 'Pridanie vzťahu medzi kurzom a jeho tvorcom', type: 'Implementácia' },
    { date: '25.4.', description: 'Implementácia tabuľky participants pre kurzy', type: 'Implementácia' },
    { date: '28.4.', description: 'Písanie bakalárskej práce', type: 'Písanie' },
    { date: '1.5.', description: 'Pridanie možnosti nahrávať obrázky ku kurzom', type: 'Implementácia' },
    { date: '1.5.', description: 'Oprava Swagger dokumentácie pre upload endpointy', type: 'Implementácia' },
    { date: '5.5.', description: 'Implementácia endpointov pre správu účastníkov kurzov', type: 'Implementácia' },
    { date: '8.5.', description: 'Písanie bakalárskej práce', type: 'Písanie' },
    { date: '10.5.', description: 'Dynamické tlačidlá podľa stavu kurzu pre študentov', type: 'Implementácia' },
    { date: '12.5.', description: 'Pridanie komponetu na správu účastníkov kurzu', type: 'Implementácia' },
    { date: '15.5.', description: 'Písanie bakalárskej práce', type: 'Písanie' },
    { date: '17.5.', description: 'Prepojenie študentského overview s backendom', type: 'Implementácia' },
    { date: '17.5.', description: 'Integrácia TinyMCE editoru s popisom kurzov', type: 'Implementácia' },
    { date: '20.5.', description: 'Oprava problému s ukladaním úprav úloh', type: 'Implementácia' },
    { date: '22.5.', description: 'Písanie bakalárskej práce', type: 'Písanie' },
    { date: '25.5.', description: 'Implementácia ochrany kurzov pre neprijatých študentov', type: 'Implementácia' },
    { date: '27.5.', description: 'Prepojenie študentského pohľadu na zadania s backendom', type: 'Implementácia' },
    { date: '27.5.', description: 'Pridanie možnosti upravovať používateľské údaje', type: 'Implementácia' },
    { date: '30.5.', description: 'Písanie bakalárskej práce', type: 'Písanie' },
    { date: '31.5.', description: 'Malé UI vizuálne zmeny a úpravy kategórií', type: 'Implementácia' },
    { date: '31.5.', description: 'Pridanie vyhľadávania kurzov pre učiteľské rozhranie', type: 'Implementácia' },
    { date: '1.6.', description: 'Písanie bakalárskej práce', type: 'Písanie' },
    { date: '1.6.', description: 'Úprava veľkostí kontajnerov v učiteľskom rozhraní', type: 'Implementácia' },
    { date: '1.6.', description: 'Pridanie vyhľadávacieho panelu pri schvaľovaní používateľov', type: 'Implementácia' },
    { date: '2.6.', description: 'Písanie bakalárskej práce', type: 'Písanie' },
    { date: '3.6.', description: 'Zlepšenie zobrazenia zadaní v študentskom rozhraní', type: 'Implementácia' },
    { date: '4.6.', description: 'Písanie bakalárskej práce', type: 'Písanie' },
    { date: '5.6.', description: 'Písanie bakalárskej práce', type: 'Písanie' },
    { date: '5.6.', description: 'Odovzdanie bakalárskej práce', type: 'Odovzdanie' }
  ];
  selectedType: string | null = null; // null znamená "všetko"
  groupedEntries: { weekNumber: number; entries: { date: string; description: string; type: string }[] }[] = [];

  constructor() {
    this.groupEntriesByWeek(); // na začiatku zobraz všetko
  }

  getChipStyle(type: string | null) {
    switch (type) {
      case 'Implementácia':
        return { backgroundColor: '#2196f3', color: '#ffffff' };
      case 'Písanie':
        return { backgroundColor: '#ff9800', color: '#ffffff' };
      case 'Odovzdanie':
        return { backgroundColor: '#4caf50', color: '#ffffff' };
      case 'Príprava':
        return { backgroundColor: '#9c27b0', color: '#ffffff' };
      case 'Všetko':
      case null:
        return { backgroundColor: '#757575', color: '#ffffff' };
      default:
        return {};
    }
  }


  filterEntriesByType(type: string | null) {
    this.selectedType = type;
    this.groupEntriesByWeek(); // znovu zgrupuj podľa filtra
  }

  private groupEntriesByWeek() {
    const filteredEntries = this.selectedType
      ? this.diaryEntries.filter(entry => entry.type === this.selectedType)
      : this.diaryEntries;

    const entriesWithParsedDates = filteredEntries.map(entry => ({
      ...entry,
      parsedDate: parse(`${entry.date}2025`, 'dd.M.yyyy', new Date())
    }));

    const grouped = entriesWithParsedDates.reduce((acc, entry) => {
      const weekStart = startOfWeek(entry.parsedDate, { weekStartsOn: 1 });
      const weekStartStr = weekStart.toISOString();

      let weekGroup = acc.find(group => group.weekStart === weekStartStr);
      if (!weekGroup) {
        weekGroup = { weekStart: weekStartStr, entries: [] };
        acc.push(weekGroup);
      }
      weekGroup.entries.push({ date: entry.date, description: entry.description, type: entry.type });
      return acc;
    }, [] as { weekStart: string; entries: { date: string; description: string; type: string }[] }[]);

    this.groupedEntries = grouped
      .sort((a, b) => new Date(a.weekStart).getTime() - new Date(b.weekStart).getTime())
      .map((group, index) => ({
        weekNumber: index + 1,
        entries: group.entries
      }));
  }
}
