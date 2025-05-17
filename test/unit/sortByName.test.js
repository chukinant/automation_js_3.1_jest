const sorting = require("../../app");

describe("Books' names test suit", () => {
  it("Books names should be sorted in descending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

  it("Books' names are not sorted if equal", () => {
    
    const input = ["Властелин Колец", "Гарри Поттер", "Гарри Поттер", "Волшебник изумрудного города"];
    let expected = ["Властелин Колец", "Волшебник изумрудного города", "Гарри Поттер", "Гарри Поттер"];

    let output = sorting.sortByName(input);

    expect(expected).toEqual(output);
  });
