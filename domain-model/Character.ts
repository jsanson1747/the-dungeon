import { Attribute } from "./Attribute";
import { Class } from "./Class";
import { InventoryItem } from "./InventoryItem";
import { Race } from "./Race";

type Alignment =
  | "lawful good"
  | "neutral good"
  | "chaotic good"
  | "lawful neutral"
  | "true neutral"
  | "chaotic neutral"
  | "lawful evil"
  | "neutral evil"
  | "chaotic evil";

type SavingThrow = {
  attribute: Attribute["name"];
  proficient: boolean;
  modifier: number;
};

type Skill = {
  attribute: Attribute;
  proficient: boolean;
};

type Die = "d4" | "d6" | "d8" | "d12" | "d20";

type DeathSaves = { successes: number; failures: number };

type DamageType =
  | "acid"
  | "bludgeoning"
  | "cold"
  | "fire"
  | "force"
  | "lightning"
  | "necrotic"
  | "piercing"
  | "poison"
  | "psychic"
  | "radiant"
  | "slashing"
  | "thunder";

type Weapon = {}; // TODO - NEEDS DEFINITION

type Spell = {}; // TODO - NEEDS DEFINITION

type AttackItem = {
  item: Weapon | Spell;
  attackBonus: number;
  numberDamageDie: number;
  damageDieType: Die;
  damageModifier: number;
  damageType: DamageType;
};

type Currency = {
  numCopperPieces: number;
  numSilverPieces: number;
  numElectrumPieces: number;
  numGoldPieces: number;
  numPlatinumPieces: number;
};

export class Character {
  private _name: string;
  private _class: Class;
  private _level: number;
  private _race: Race;
  private _alignment: Alignment;
  private _experiencePoints: number;
  private _background: string;

  private _strength: Attribute;
  private _dexterity: Attribute;
  private _constitution: Attribute;
  private _intelligence: Attribute;
  private _wisdom: Attribute;
  private _charisma: Attribute;

  private _inspiration: number;
  private _proficiencyBonus: number;
  private _savingThrows: SavingThrow[];
  private _skills: Skill[];

  private _armorClass: number;
  private _initiative: number;
  private _speed: number;
  private _hitPointMaximum: number;
  private _currentHitPoints: number;
  private _temporaryHitPoints: number;
  private _hitDieType: Die;
  private _totalHitDie: number;
  private _maxTotalHitDie: number; // Define as this.level in constructor
  private _deathSaves: DeathSaves;

  private _personalityTraits: string;
  private _ideals: string;
  private _bonds: string;
  private _flaws: string;

  private _attacks: AttackItem[];
  private _attackNotes: string;

  private _passiveWisdom: number;

  private _proficiencies: string[];
  private _languages: string[]; // TODO - CONSIDER MAKING AN ENUM OF LANGUAGES

  private _equipment: InventoryItem[];
  private _currency: Currency;

  private _featuresAndTraits: { name: string; description: string }[];

  private _age: { value: number; unitOfTime: string };
  private _height: { feet: number; inches: number };
  private _weight: { value: number; unitOfWeight: string };
  private _eyeColor: string;
  private _skinType: string;
  private _hairColor: string;

  private _image: File; // TODO - FIGURE OUR HOW WE ARE STORING CHRACTER IMAGES

  private _allies: { name: string; description: string }[];
  private _organizations: { name: string; description: string }[];

  private _backstory: string;

  private _treasure: InventoryItem[];

  private _spellcastingClass: string[]; // TODO - MAKE AN ENUM OF SPELLCASTING CLASSES
  private _spellcastingAbility: number;
  private _spellSaveDC: number;
  private _spellAttackBonus: number;

  private _spells: Spell[]; // TODO - FIGURE OUT A BETTER WAY TO ORGANIZE THE SPELLS
}
