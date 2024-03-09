import {
  Metadata,
  MPL_TOKEN_METADATA_PROGRAM_ID,
  Collection,
} from "@metaplex-foundation/mpl-token-metadata";
import {
  FindNftByMetadataInput,
  Metaplex,
  keypairIdentity,
} from "@metaplex-foundation/js";
import {
  sendAndConfirmTransaction,
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
  NONCE_ACCOUNT_LENGTH,
} from "@solana/web3.js";

import {
  TOKEN_PROGRAM_ID,
  calculateFee,
  AuthorityType,
  createSetAuthorityInstruction,
  setAuthority,
  createTransferCheckedInstruction,
  transferChecked,
  createRevokeInstruction,
  revoke,
  createAssociatedTokenAccountInstruction,
  getAssociatedTokenAddress,
  createAssociatedTokenAccount,
  approveChecked,
  createApproveCheckedInstruction,
  createUpdateAuthorityInstruction,
  NATIVE_MINT,
  createSyncNativeInstruction,
  createAccount,
} from "@solana/spl-token";

class OTCdesk {
  connection: Connection;
  lister: Keypair;
  bidder: Keypair;
  connectionString: string;
  networkCluster: any;
  networkEndpoint: any;
  systemProgram: PublicKey;
  usdcAddress: PublicKey;

  constructor() {
    this.connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    this.lister = Keypair.generate();
    this.bidder = Keypair.generate();
    this.systemProgram = SystemProgram.programId;
    // this.networkCluster = "devnet";
    // this.networkEndpoint = clusterApiUrl(this.networkCluster);
    // this.connection = new Connection(this.networkEndpoint, "confirmed");

    // make the lister and bidder dynamic
  }

  // TLDR
  // lister creates a pda, puts up a token for sale
  // bidder bids on the listing
  // lister accepts the bid
  // lister cancels the listing
  // lister removes the listing
  // bidder cancels the bid
  // bidder removes the bid
  // lister removes the listing
  // escrow pda sends the token to the bidder, as it is registered as a token delegate
  // bidder sends token to the lister to the pda
  // pda sends back to the lister, and sends out fees to the platform
  // closes that trade

  // there can be multiple listings and bids happening all at once.
  // each listing can have multiple bids
  // each bid can have multiple listings

  initiateEscrow = () => {
    // initiate escrow
    // create an escrow pda
    // delegate the token to the escrow pda
    // lister creates a pda
    //! only the bidder that creates an escrow can close it and receive the tokens within
    // fees must be sent to the platform, and are accounted for
  };
  delegateToken = () => {
    // delegate token to pda
    // actually delegate the token to the escrow pda
    // so the pda can eventually spend it
    //! this priviledge should be revoked immediatly after, to prevent a scenario
    //  where the pda is not closed but is priviledged to spend the bidders tokens
  };
  private sendTokenFromPDA = () => {
    // send token from pda
    // send token from the pda to the bidder
    // send tokens to the pda and receive tokens in return
  };
  bidListing = () => {
    // bid for a listing
    // create a bid
    // this bidder is registered. and the bid is stored
    // the lister can accept the bid, or reject
    // the bidder sends tokens to the pda, to create a bid.
  };

  private createListing = () => {
    // create a listing
    // called when an escrow is initiated.
    // bidders bid on this listing
  };

  buy_now = () => {
    // buy a token now.
    // pay the current bid price for the token
    //! or pay a premium price 10% extra to buy right now
  };
  removeListing = () => {
    // remove a listing
    // token lister can remove a listing
    // refunding all bidders
    // revoking the escrow pda delegate authority
  };
  acceptListing = () => {
    // accept a listing
    // listers can accept bids
    // revoking the escrow pda delegate authority
    // sending the token from the escrow pda to the lister, for that specific bid. refuding the rest
    // sending the nft to the user with that specific bid
  };
  private transferNFT = () => {
    // transfer nft
    // functionality to transfer nft
  };
  private transferToken = () => {
    // transfer token
    // functionality to send out a spl token
  };

  private generatePDA = () => {
    // generate a new escrow pda determinitically, also include a nonce.
    // since it can be deployed multiple times
    // generate a new escrow pda
  };

  private verifyNFTCollection = () => {
    // verify an nft collection using public key
    // verify
  };
}
