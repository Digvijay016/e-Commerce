
import { Injectable } from '@angular/core';

import { Comics } from 'src/app/shared/models/comic';
import { Genre } from '../../shared/models/genre';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor() { }

  getComicById(id: number): Comics {
    return this.getAll().find(comic => comic.id == id)!;
  }

  getAllComicByGenre(genre: string): Comics[] {
    if (genre == 'All')
      return this.getAll()
    else
      return this.getAll().filter(comic => comic.genres?.includes(genre));
  }

  getAllGenre(): Genre[] {
    return [
      {name:'All', count:12},
      { name: 'Action', count: 10 },
      { name: 'Drama', count: 6 },
      { name: 'Adventure', count: 4 },
      { name: 'Mystery', count: 4 },
      { name: 'Thriller', count: 6 },
      { name: 'Comedy', count: 4 },
      { name: 'Detective', count: 1 },
      { name: 'Suspense', count: 4 },
      { name: 'Multiverse', count: 1 },
    ];
  }

  getAll(): Comics[] {
    return [
      {
        id: 1,
        name: 'Superman / Doomsday',
        logo: '/assets/logo_1.png',
        comicPages: '10-20',
        price: 10,
        favorite: true,
        origins: ['The Man of Steel #18'],
        imageUrl: '/assets/comic1.jpeg',
        genres: ['Action', 'Adventure', 'Thriller'],
        details: "Superman: The Man of Steel was a monthly American comic book series that ran for 136 issues from 1991 to 2003,[1] featuring Superman and published by DC Comics. As a result of introducing this series alongside its already existing titles, DC Comics was able to publish a new Superman comic each week. Included in these 136 issues were two special issues: #0 (October 1994, published between issues #37 and #38) and #1,000,000 (November 1998, published between issues #83 and #84), which were tie-ins to Zero Hour: Crisis in Time and DC One Million, respectively."
      },
      {
        id: 2,
        name: 'The Batman Begins',
        logo: '/assets/logo_2.png',
        comicPages: '5-10',
        price: 7.99,
        favorite: true,
        origins: ['Detective Comics #27'],
        imageUrl: '/assets/comic2.jpeg',
        genres: ['Detective', 'Adventure', 'Suspense'],
        details : "Detective Comics is an American comic book series published by Detective Comics, later shortened to DC Comics. The first volume, published from 1937 to 2011 (and later continued in 2016), is best known for introducing the superhero Batman in Detective Comics #27 (cover-dated May 1939).A second series of the same title was launched in the fall of 2011, but in 2016, reverted to the original volume numbering. The series is the source of its publishing company's name, and—along with Action Comics, the series that launched with the debut of Superman—one of the medium's signature series. The series published 881 issues between 1937 and 2011 and is the longest continuously published comic book in the United States."
      },
      {
        id: 3,
        name: 'The Flashpoint',
        logo: '/assets/logo_3.png',
        comicPages: '10-30',
        price: 15.99,
        favorite: true,
        origins: ['Flash Comics #18'],
        imageUrl: '/assets/comic3.webp',
        genres: ['Comedy', 'Action', 'Suspense'],
        details: "Flash Comics is a comics anthology published by All-American Publications and later by National Periodical Publications (DC Comics). The title had 104 issues published from January 1940 to February 1949. Despite the title, the anthology featured the adventures of multiple superheroes in addition to Jay Garrick, the original Flash. Characters introduced in the series include the Flash, Hawkman (Carter Hall), Hawkgirl and Black Canary."
      },
      {
        id: 4,
        name: 'The Spiderverse',
        logo: '/assets/logo_4.png',
        comicPages: '20-40',
        price: 11.99,
        favorite: false,
        origins: ['Amazing Fantasy #15'],
        imageUrl: '/assets/comic4.jpeg',
        genres: ['Comedy', 'Multiverse', 'Action', 'Suspense'],
        details: "Amazing Adult Fantasy, retitled Amazing Fantasy in its final issue, is an American comic book anthology series published by Marvel Comics from 1961 through 1962, with the latter title revived with superhero features in 1995 and in the 2000s. The final 1960s issue, Amazing Fantasy #15 (cover-dated Aug. 1962), introduced the popular superhero character Spider-Man. Amazing Adult Fantasy premiered with issue #7, taking over the numbering from Amazing Adventures."
      },
      {
        id: 5,
        name: 'The Venom',
        logo: '/assets/logo_5.png',
        comicPages: '30-50',
        price: 18.99,
        favorite: false,
        origins: ['The Amazing Spider-Man #252'],
        imageUrl: '/assets/comic5.jpeg',
        genres: ['Comedy', 'Action', 'Rated-R'],
        details: "The Amazing Spider-Man is an American comic book series published by Marvel Comics, featuring the fictional superhero Spider-Man as its main protagonist. Being in the mainstream continuity of the franchise, it began publication in 1963 as a bimonthly periodical (as Amazing Fantasy had been), quickly being increased to monthly, and was published continuously, with a brief interruption in 1995, until its second volume with a new numbering order in 1999. In 2003, the series reverted to the numbering order of the first volume. The title has occasionally been published biweekly, and was published three times a month from 2008 to 2010."
      },
      {
        id: 6,
        name: 'The Black Panther',
        logo: '/assets/logo_6.png',
        comicPages: '10-30',
        price: 16.99,
        favorite: false,
        origins: ['Fantastic Four #52'],
        imageUrl: '/assets/comic6.jpeg',
        genres: ['Action', 'Thriller', 'Adventure'],
        details: "Black Panther is a fictional character appearing in American comic books published by Marvel Comics. The character was created by writer-editor Stan Lee and artist-coplotter Jack Kirby. The character first appeared in Fantastic Four #52 (cover-dated July 1966) in the Silver Age of Comic Books. Black Panther's real name is T'Challa, and he is depicted as the king and protector of the fictional African nation of Wakanda. Along with possessing enhanced abilities achieved through ancient Wakandan rituals of drinking the essence of the heart-shaped herb, T'Challa also relies on his proficiency in science, rigorous physical training, hand-to-hand combat skills, and access to wealth and advanced Wakandan technology to combat his enemies."
      },
      {
        id: 7,
        name: 'The Justice Gods Of America',
        logo: '/assets/logo_7.png',
        comicPages: '10-20',
        price: 7.99,
        favorite: true,
        origins: ['The Brave and the Bold #28'],
        imageUrl: '/assets/comic7.jpeg',
        genres: ['Action', 'Drama', 'Mystery', 'Thriller'],
        details: "The Justice Society of America (JSA) is a superhero team appearing in American comic books published by DC Comics. The team was conceived by editor Sheldon Mayer and writer Gardner Fox during the Golden Age of Comic Books. The JSA first appeared in All Star Comics #3 (Winter 1940–1941), making it the first team of superheroes in comic books. The original members of the Justice Society of America were Doctor Fate, Hourman, The Spectre, Sandman, Atom, Flash, Green Lantern, and Hawkman."
      },
      {
        id: 8,
        name: 'The Avengers',
        logo: '/assets/logo_8.png',
        comicPages: '20-30',
        price: 13.99,
        favorite: false,
        origins: ['The Avengers #1'],
        imageUrl: '/assets/comic8.jpeg',
        genres: ['Action', 'Drama', 'Mystery', 'Thriller'],
        details: "The Avengers are a fictional team of superheroes that appears in American comic books published by Marvel Comics. The team made its debut in The Avengers #1 (cover-dated Sept. 1963), created by writer-editor Stan Lee and artist/co-plotter Jack Kirby.Earths Mightiest Heroes, the Avengers consisted of Iron Man, Ant-Man, Hulk, Thor and the Wasp. The original Captain America was discovered trapped in ice in issue #4, and joined the group after they revived him."
      },
      {
        id: 9,
        name: 'The Deadpool',
        logo: '/assets/logo_9.png',
        comicPages: '20-30',
        price: 13.99,
        favorite: true,
        origins: ['The New Mutants #98'],
        imageUrl: '/assets/comic9.jpeg',
        genres: ['Action', 'Drama', 'Comedy'],
        details: "Deadpool is a fictional character appearing in American comic books published by Marvel Comics. Created by writer Fabian Nicieza and artist/writer Rob Liefeld, the character first appeared in The New Mutants #98 (cover-dated Feb. 1991). Initially, Deadpool was depicted as a supervillain when he made his first appearance in The New Mutants and later in issues of X-Force, but later evolved into his more recognizable antiheroic persona. Deadpool, whose real name is Wade Winston Wilson, is a disfigured mercenary with the superhuman ability of regeneration and physical prowess. The character is known as the Merc with a Mouth because of his tendency to talk and joke constantly, including breaking the fourth wall for humorous effect and running gags."
      },
      {
        id: 10,
        name: 'Wonder Woman',
        logo: '/assets/logo_10.png',
        comicPages: '20-30',
        price: 13.99,
        favorite: false,
        origins: ['All Star Comics #8'],
        imageUrl: '/assets/comic10.jpeg',
        genres: ['Action', 'Drama', 'Adventure', 'Thriller'],
        details: "Wonder Woman is a superheroine appearing in American comic books published by DC Comics.[3] The character is a founding member of the Justice League. The character first appeared in All Star Comics #8 published October 21, 1941[4] with her first feature in Sensation Comics #1 in January 1942. The Wonder Woman title has been published by DC Comics almost continuously ever since.[5] In her homeland, the island nation of Themyscira, her official title is Princess Diana of Themyscira. When blending into the society outside of her homeland, she sometimes adopts her civilian identity Diana Prince."
      },
      {
        id: 11,
        name: 'The Green Lantern',
        logo: '/assets/logo_11.png',
        comicPages: '20-30',
        price: 13.99,
        favorite: false,
        origins: ['All-American Comics #16'],
        imageUrl: '/assets/comic11.webp',
        genres: ['Action', 'Drama', 'Mystery', 'Suspense'],
        details: "Green Lantern is the name of several superheroes appearing in American comic books published by DC Comics. They fight evil with the aid of rings that grant them a variety of extraordinary powers, all of which come from imagination, fearlessness and/or emotional willpower.The characters are typically depicted as members of the Green Lantern Corps, an intergalactic law enforcement agency."
      },
      {
        id: 12,
        name: 'The Iron Man',
        logo: '/assets/logo_12.png',
        comicPages: '20-30',
        price: 13.99,
        favorite: false,
        origins: ['Tales of Suspense #39'],
        imageUrl: '/assets/comic12.webp',
        genres: ['Action', 'Drama', 'Mystery', 'Thriller'],
        details: "Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense #39 (cover dated March 1963), and received his own title in Iron Man #1 (May 1968). Also in 1963, the character founded the Avengers alongside Thor, Ant-Man, Wasp and the Hulk."
      },
    ];
  }
}
