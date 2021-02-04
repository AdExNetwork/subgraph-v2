// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Channel extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Channel entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Channel entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Channel", id.toString(), this);
  }

  static load(id: string): Channel | null {
    return store.get("Channel", id) as Channel | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get channelId(): Bytes {
    let value = this.get("channelId");
    return value.toBytes();
  }

  set channelId(value: Bytes) {
    this.set("channelId", Value.fromBytes(value));
  }

  get tokenAddr(): Bytes {
    let value = this.get("tokenAddr");
    return value.toBytes();
  }

  set tokenAddr(value: Bytes) {
    this.set("tokenAddr", Value.fromBytes(value));
  }

  get tokenAmount(): BigInt {
    let value = this.get("tokenAmount");
    return value.toBigInt();
  }

  set tokenAmount(value: BigInt) {
    this.set("tokenAmount", Value.fromBigInt(value));
  }

  get validUntil(): BigInt {
    let value = this.get("validUntil");
    return value.toBigInt();
  }

  set validUntil(value: BigInt) {
    this.set("validUntil", Value.fromBigInt(value));
  }

  get validators(): Array<Bytes> {
    let value = this.get("validators");
    return value.toBytesArray();
  }

  set validators(value: Array<Bytes>) {
    this.set("validators", Value.fromBytesArray(value));
  }

  get spec(): string {
    let value = this.get("spec");
    return value.toString();
  }

  set spec(value: string) {
    this.set("spec", Value.fromString(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }

  get channelWithdraw(): Array<string> | null {
    let value = this.get("channelWithdraw");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set channelWithdraw(value: Array<string> | null) {
    if (value === null) {
      this.unset("channelWithdraw");
    } else {
      this.set(
        "channelWithdraw",
        Value.fromStringArray(value as Array<string>)
      );
    }
  }

  get ChannelWithdrawExpired(): Array<string> | null {
    let value = this.get("ChannelWithdrawExpired");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set ChannelWithdrawExpired(value: Array<string> | null) {
    if (value === null) {
      this.unset("ChannelWithdrawExpired");
    } else {
      this.set(
        "ChannelWithdrawExpired",
        Value.fromStringArray(value as Array<string>)
      );
    }
  }
}

export class ChannelWithdrawExpired extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save ChannelWithdrawExpired entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ChannelWithdrawExpired entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ChannelWithdrawExpired", id.toString(), this);
  }

  static load(id: string): ChannelWithdrawExpired | null {
    return store.get(
      "ChannelWithdrawExpired",
      id
    ) as ChannelWithdrawExpired | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get channel(): string {
    let value = this.get("channel");
    return value.toString();
  }

  set channel(value: string) {
    this.set("channel", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }
}

export class ChannelWithdraw extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ChannelWithdraw entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ChannelWithdraw entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ChannelWithdraw", id.toString(), this);
  }

  static load(id: string): ChannelWithdraw | null {
    return store.get("ChannelWithdraw", id) as ChannelWithdraw | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get channel(): string {
    let value = this.get("channel");
    return value.toString();
  }

  set channel(value: string) {
    this.set("channel", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }
}

export class Bond extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Bond entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Bond entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Bond", id.toString(), this);
  }

  static load(id: string): Bond | null {
    return store.get("Bond", id) as Bond | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bondId(): Bytes {
    let value = this.get("bondId");
    return value.toBytes();
  }

  set bondId(value: Bytes) {
    this.set("bondId", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get poolId(): Bytes {
    let value = this.get("poolId");
    return value.toBytes();
  }

  set poolId(value: Bytes) {
    this.set("poolId", Value.fromBytes(value));
  }

  get nonce(): BigInt {
    let value = this.get("nonce");
    return value.toBigInt();
  }

  set nonce(value: BigInt) {
    this.set("nonce", Value.fromBigInt(value));
  }

  get slashedAtStart(): BigInt {
    let value = this.get("slashedAtStart");
    return value.toBigInt();
  }

  set slashedAtStart(value: BigInt) {
    this.set("slashedAtStart", Value.fromBigInt(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }
}

export class UnbondRequest extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save UnbondRequest entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save UnbondRequest entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("UnbondRequest", id.toString(), this);
  }

  static load(id: string): UnbondRequest | null {
    return store.get("UnbondRequest", id) as UnbondRequest | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get bondId(): Bytes {
    let value = this.get("bondId");
    return value.toBytes();
  }

  set bondId(value: Bytes) {
    this.set("bondId", Value.fromBytes(value));
  }

  get willUnlock(): BigInt {
    let value = this.get("willUnlock");
    return value.toBigInt();
  }

  set willUnlock(value: BigInt) {
    this.set("willUnlock", Value.fromBigInt(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }
}

export class Unbond extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Unbond entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Unbond entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Unbond", id.toString(), this);
  }

  static load(id: string): Unbond | null {
    return store.get("Unbond", id) as Unbond | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get bondId(): Bytes {
    let value = this.get("bondId");
    return value.toBytes();
  }

  set bondId(value: Bytes) {
    this.set("bondId", Value.fromBytes(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }
}

export class Slash extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Slash entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Slash entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Slash", id.toString(), this);
  }

  static load(id: string): Slash | null {
    return store.get("Slash", id) as Slash | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get poolId(): Bytes {
    let value = this.get("poolId");
    return value.toBytes();
  }

  set poolId(value: Bytes) {
    this.set("poolId", Value.fromBytes(value));
  }

  get newSlashPts(): BigInt {
    let value = this.get("newSlashPts");
    return value.toBigInt();
  }

  set newSlashPts(value: BigInt) {
    this.set("newSlashPts", Value.fromBigInt(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }
}

export class Identity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Identity entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Identity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Identity", id.toString(), this);
  }

  static load(id: string): Identity | null {
    return store.get("Identity", id) as Identity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }
}

export class IdentityPrivilege extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save IdentityPrivilege entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save IdentityPrivilege entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("IdentityPrivilege", id.toString(), this);
  }

  static load(id: string): IdentityPrivilege | null {
    return store.get("IdentityPrivilege", id) as IdentityPrivilege | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get identity(): Bytes {
    let value = this.get("identity");
    return value.toBytes();
  }

  set identity(value: Bytes) {
    this.set("identity", Value.fromBytes(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get level(): i32 {
    let value = this.get("level");
    return value.toI32();
  }

  set level(value: i32) {
    this.set("level", Value.fromI32(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }

  get lastUpdateTimestamp(): i32 {
    let value = this.get("lastUpdateTimestamp");
    return value.toI32();
  }

  set lastUpdateTimestamp(value: i32) {
    this.set("lastUpdateTimestamp", Value.fromI32(value));
  }
}

export class IdentityRoutine extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save IdentityRoutine entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save IdentityRoutine entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("IdentityRoutine", id.toString(), this);
  }

  static load(id: string): IdentityRoutine | null {
    return store.get("IdentityRoutine", id) as IdentityRoutine | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get identity(): Bytes {
    let value = this.get("identity");
    return value.toBytes();
  }

  set identity(value: Bytes) {
    this.set("identity", Value.fromBytes(value));
  }

  get hash(): Bytes {
    let value = this.get("hash");
    return value.toBytes();
  }

  set hash(value: Bytes) {
    this.set("hash", Value.fromBytes(value));
  }

  get authorized(): boolean {
    let value = this.get("authorized");
    return value.toBoolean();
  }

  set authorized(value: boolean) {
    this.set("authorized", Value.fromBoolean(value));
  }

  get timestamp(): i32 {
    let value = this.get("timestamp");
    return value.toI32();
  }

  set timestamp(value: i32) {
    this.set("timestamp", Value.fromI32(value));
  }

  get lastUpdateTimestamp(): i32 {
    let value = this.get("lastUpdateTimestamp");
    return value.toI32();
  }

  set lastUpdateTimestamp(value: i32) {
    this.set("lastUpdateTimestamp", Value.fromI32(value));
  }
}
