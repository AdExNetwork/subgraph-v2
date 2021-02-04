// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class LogChannelOpen extends ethereum.Event {
  get params(): LogChannelOpen__Params {
    return new LogChannelOpen__Params(this);
  }
}

export class LogChannelOpen__Params {
  _event: LogChannelOpen;

  constructor(event: LogChannelOpen) {
    this._event = event;
  }

  get channelId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class LogChannelWithdraw extends ethereum.Event {
  get params(): LogChannelWithdraw__Params {
    return new LogChannelWithdraw__Params(this);
  }
}

export class LogChannelWithdraw__Params {
  _event: LogChannelWithdraw;

  constructor(event: LogChannelWithdraw) {
    this._event = event;
  }

  get channelId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class LogChannelWithdrawExpired extends ethereum.Event {
  get params(): LogChannelWithdrawExpired__Params {
    return new LogChannelWithdrawExpired__Params(this);
  }
}

export class LogChannelWithdrawExpired__Params {
  _event: LogChannelWithdrawExpired;

  constructor(event: LogChannelWithdrawExpired) {
    this._event = event;
  }

  get channelId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class AdExCore extends ethereum.SmartContract {
  static bind(address: Address): AdExCore {
    return new AdExCore("AdExCore", address);
  }

  states(param0: Bytes): i32 {
    let result = super.call("states", "states(bytes32):(uint8)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);

    return result[0].toI32();
  }

  try_states(param0: Bytes): ethereum.CallResult<i32> {
    let result = super.tryCall("states", "states(bytes32):(uint8)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  withdrawn(param0: Bytes): BigInt {
    let result = super.call("withdrawn", "withdrawn(bytes32):(uint256)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);

    return result[0].toBigInt();
  }

  try_withdrawn(param0: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall("withdrawn", "withdrawn(bytes32):(uint256)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  withdrawnPerUser(param0: Bytes, param1: Address): BigInt {
    let result = super.call(
      "withdrawnPerUser",
      "withdrawnPerUser(bytes32,address):(uint256)",
      [
        ethereum.Value.fromFixedBytes(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_withdrawnPerUser(
    param0: Bytes,
    param1: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "withdrawnPerUser",
      "withdrawnPerUser(bytes32,address):(uint256)",
      [
        ethereum.Value.fromFixedBytes(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ChannelOpenCall extends ethereum.Call {
  get inputs(): ChannelOpenCall__Inputs {
    return new ChannelOpenCall__Inputs(this);
  }

  get outputs(): ChannelOpenCall__Outputs {
    return new ChannelOpenCall__Outputs(this);
  }
}

export class ChannelOpenCall__Inputs {
  _call: ChannelOpenCall;

  constructor(call: ChannelOpenCall) {
    this._call = call;
  }

  get channel(): ChannelOpenCallChannelStruct {
    return this._call.inputValues[0].value.toTuple() as ChannelOpenCallChannelStruct;
  }
}

export class ChannelOpenCall__Outputs {
  _call: ChannelOpenCall;

  constructor(call: ChannelOpenCall) {
    this._call = call;
  }
}

export class ChannelOpenCallChannelStruct extends ethereum.Tuple {
  get creator(): Address {
    return this[0].toAddress();
  }

  get tokenAddr(): Address {
    return this[1].toAddress();
  }

  get tokenAmount(): BigInt {
    return this[2].toBigInt();
  }

  get validUntil(): BigInt {
    return this[3].toBigInt();
  }

  get validators(): Array<Address> {
    return this[4].toAddressArray();
  }

  get spec(): Bytes {
    return this[5].toBytes();
  }
}

export class ChannelWithdrawCall extends ethereum.Call {
  get inputs(): ChannelWithdrawCall__Inputs {
    return new ChannelWithdrawCall__Inputs(this);
  }

  get outputs(): ChannelWithdrawCall__Outputs {
    return new ChannelWithdrawCall__Outputs(this);
  }
}

export class ChannelWithdrawCall__Inputs {
  _call: ChannelWithdrawCall;

  constructor(call: ChannelWithdrawCall) {
    this._call = call;
  }

  get channel(): ChannelWithdrawCallChannelStruct {
    return this._call.inputValues[0].value.toTuple() as ChannelWithdrawCallChannelStruct;
  }

  get stateRoot(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get signatures(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }

  get proof(): Array<Bytes> {
    return this._call.inputValues[3].value.toBytesArray();
  }

  get amountInTree(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class ChannelWithdrawCall__Outputs {
  _call: ChannelWithdrawCall;

  constructor(call: ChannelWithdrawCall) {
    this._call = call;
  }
}

export class ChannelWithdrawCallChannelStruct extends ethereum.Tuple {
  get creator(): Address {
    return this[0].toAddress();
  }

  get tokenAddr(): Address {
    return this[1].toAddress();
  }

  get tokenAmount(): BigInt {
    return this[2].toBigInt();
  }

  get validUntil(): BigInt {
    return this[3].toBigInt();
  }

  get validators(): Array<Address> {
    return this[4].toAddressArray();
  }

  get spec(): Bytes {
    return this[5].toBytes();
  }
}

export class ChannelWithdrawExpiredCall extends ethereum.Call {
  get inputs(): ChannelWithdrawExpiredCall__Inputs {
    return new ChannelWithdrawExpiredCall__Inputs(this);
  }

  get outputs(): ChannelWithdrawExpiredCall__Outputs {
    return new ChannelWithdrawExpiredCall__Outputs(this);
  }
}

export class ChannelWithdrawExpiredCall__Inputs {
  _call: ChannelWithdrawExpiredCall;

  constructor(call: ChannelWithdrawExpiredCall) {
    this._call = call;
  }

  get channel(): ChannelWithdrawExpiredCallChannelStruct {
    return this._call.inputValues[0].value.toTuple() as ChannelWithdrawExpiredCallChannelStruct;
  }
}

export class ChannelWithdrawExpiredCall__Outputs {
  _call: ChannelWithdrawExpiredCall;

  constructor(call: ChannelWithdrawExpiredCall) {
    this._call = call;
  }
}

export class ChannelWithdrawExpiredCallChannelStruct extends ethereum.Tuple {
  get creator(): Address {
    return this[0].toAddress();
  }

  get tokenAddr(): Address {
    return this[1].toAddress();
  }

  get tokenAmount(): BigInt {
    return this[2].toBigInt();
  }

  get validUntil(): BigInt {
    return this[3].toBigInt();
  }

  get validators(): Array<Address> {
    return this[4].toAddressArray();
  }

  get spec(): Bytes {
    return this[5].toBytes();
  }
}
