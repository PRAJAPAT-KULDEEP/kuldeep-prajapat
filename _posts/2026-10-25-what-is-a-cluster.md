---
title: "What Is Atomic Cluster? A Short Introduction to Atomic Cluster Physics"
date: 2026-10-25
permalink: /vlog/what-is-a-cluster/
math: true
categories:
  - vlog
tags:
  - cluster physics
  - atomic clusters
  - fullerene
  - endohedral fullerenes
  - metal cluster
  - photoionization
  - plasmonic systems
  - collective excitation
excerpt: "A beginner-friendly introduction to atomic clusters, their size-dependent properties, and why they are useful for studying collective electronic motion."
social_image: "/images/article-page-preview.svg"
---
The basic meaning of a cluster is a group of two or more units of the same kind that work collectively as a single entity. These units can be anything, such as computers in a computer cluster, galaxies in a galaxy cluster, or atoms in an atomic cluster. So, anything that comes together and behaves collectively can be called a cluster. 

On this page i will be writing about the atomic cluster. Atomic clusters are also known as nanoparticles. Before they were identified as clusters, they were used in glass matrices or silver chloride (AgCl) for photography. Cluster physics is an interdisciplinary filed. they are used in chemistry, material science, quantum information, physics and etc.
Clusters can be classified into different types, such as ionic clusters, covalent clusters, metal clusters, and van der Waals clusters, among others. Examples of these respective types include $$\mathrm{NaCl}_n$$ and $$\mathrm{CaCl}_n$$ for ionic clusters; $$\mathrm{B}_n$$ (boron clusters), $$\mathrm{C}_{60}$$ (fullerene), and $$\mathrm{P}_4$$ (white phosphorus) for covalent clusters; $$\mathrm{Na}_n$$ (sodium clusters) and $$\mathrm{Cu}_n$$ (copper clusters) for metal clusters; and $$\mathrm{Ar}_n$$ (argon clusters) and $$\mathrm{Ne}_n$$ (neon clusters) for van der Waals clusters.
Atomic cluster are interesting because they can be in different size and shape and their properties can change dramatically when just a few atoms are added or removed.
however my research cover the study how light interacts with atomic clusters ($$\mathrm{Na}_20$$), fullerenes, and endohedral systems. 

This page introduces the basic idea behind clusters and explains why they are useful for understanding electronic motion at the nanoscale. For an overview of my current questions and methods, see the [research page]({{ '/research/' | relative_url }}); a list of published work, manuscripts in preparation, posters, and presentations is available on the [publications page]({{ '/publications/' | relative_url }}).

**Properties of Clusters**
  1) Magic Number
  2) Optical response
    1) Plasmonic Resonances
     2) Surface effects
        
## How is a cluster different from an atom or a solid?

An atom has a nucleus surrounded by electrons. A bulk solid contains an enormous number of atoms, and its properties are often described using concepts such as bands and bulk collective modes. A cluster contains a finite number of atoms, so its size, shape, and atomic arrangement can strongly influence its electronic structure.

There is no single size range that defines every kind of cluster. The term is used across different fields, and the boundary between a large molecule, a cluster, and a nanoparticle depends on the system and the question being studied.

A useful way to think about it is:

- **Atoms and small molecules:** electronic states are strongly tied to the identity and bonding of a small number of constituents.
- **Clusters:** adding or removing atoms can noticeably change the structure, stability, and response to light.
- **Bulk materials:** many properties can be described as approximately continuous or size-independent, although nanoscale effects can remain important.

This is a guide rather than a strict classification.

## Why do scientists study clusters?

Clusters let researchers investigate how properties emerge as a system grows from a few atoms toward bulk matter. Their behaviour can depend on the number of atoms, geometry, charge state, and the way electrons interact.

For example, some metal clusters show particularly stable sizes, often discussed in terms of *magic numbers*. In simple models, these enhanced stabilities can be related to the filling of electronic shells, although the detailed explanation depends on the cluster and its structure.

Clusters can also absorb energy from light. The absorbed energy may excite individual electrons or drive a response involving many electrons. These different pathways make clusters useful systems for exploring the relationship between microscopic electronic structure and collective behaviour. A widely cited review by de Heer surveys experimental properties of simple metal clusters, while Brack reviews the self-consistent jellium model and semiclassical approaches used to interpret their electronic structure and collective response ([de Heer, 1993](https://doi.org/10.1103/RevModPhys.65.611); [Brack, 1993](https://doi.org/10.1103/RevModPhys.65.677)).

## What is a plasmon in a cluster?

A plasmon is a collective excitation of electrons. Instead of thinking only about one electron moving between two states, we describe a coordinated response of many electrons to an external disturbance, such as an electromagnetic field.

In a metal cluster, this response is influenced by the finite size and shape of the system. It can therefore differ from the plasmon response of an extended solid. In photoionization, a cluster can absorb a photon and emit an electron; the measured electron-energy and angular distributions can reveal information about the underlying electronic response.

A frequency-domain resonance, however, does not by itself prove that the system undergoes coherent Rabi oscillations in time. Establishing such dynamics requires a suitable time-dependent model or time-resolved evidence.

## Where do fullerenes fit in?

Fullerenes are cage-shaped carbon molecules. The best-known example, C₆₀, contains 60 carbon atoms arranged in a closed cage. Although a fullerene is a molecular system with a specific structure, it is also a finite carbon aggregate and is often studied in the broader context of cluster physics.

An *endohedral system* contains another atom or cluster inside a fullerene cage. For example, Na₂₀@C₂₄₀ denotes a sodium cluster, Na₂₀, enclosed inside a C₂₄₀ carbon cage. The symbol “@” indicates that one system is inside the other; it does not mean the two components are electronically independent. Their states can interact and hybridize, changing how the combined system responds to light. A specific example is the predicted [plasmonic resonant intercluster Coulombic decay (RICD) in Na₂₀@C₂₄₀](https://doi.org/10.1103/PhysRevLett.130.233201), published in *Physical Review Letters* in 2023. A later study examined hybridization and coherence in subshell-differential intercluster plasmonic decay in the same system ([Shaik et al., *Journal of Chemical Physics* 162, 244305 (2025)](https://doi.org/10.1063/5.0267528)).

## How are clusters studied?

Several complementary methods are used:

- **Photoelectron spectroscopy** measures the energies of electrons emitted after a system absorbs light.
- **Photoelectron angular distributions (PADs)** show how the emission probability varies with direction and help reveal the symmetry and character of electronic transitions.
- **Time-delay measurements and calculations** investigate when photoelectrons emerge relative to a reference process, providing information about the dynamics of photoionization.
- **Electronic-structure calculations**, including density-functional methods and time-dependent approaches, help interpret measured spectra and predict processes that may be difficult to isolate experimentally.

These observables connect directly to my work on [photoionization and photoelectron angular distributions]({{ '/research/#cluster-photoelectron-angular-distributions' | relative_url }}), [plasmon-assisted ICD/RICD]({{ '/research/#plasmon-assisted-icd' | relative_url }}), [endohedral fullerenes]({{ '/research/#endohedral-fullerene-photoionization' | relative_url }}), and [photoemission time delays]({{ '/research/#photoemission-time-delays' | relative_url }}). These links describe research topics and directions; they should not be read as claims that every topic has a published result.

Combining these methods can help distinguish single-electron processes from collective excitations and correlated decay pathways.

## The main idea

A cluster is more than a miniature piece of bulk material. Its finite size and structure make it a useful setting in which to study how atomic arrangement, electron correlation, and collective response shape the interaction between matter and light.

That is why clusters and fullerenes are valuable systems for my research: they provide a route to investigating photoionization, plasmonic excitations, interatomic or intercluster decay, and ultrafast electronic dynamics.

### Further reading

- W. A. de Heer, “The physics of simple metal clusters: experimental aspects and simple models,” *Reviews of Modern Physics* **65**, 611–676 (1993). [Publisher/DOI](https://doi.org/10.1103/RevModPhys.65.611)
- M. Brack, “The physics of simple metal clusters: self-consistent jellium model and semiclassical approaches,” *Reviews of Modern Physics* **65**, 677–732 (1993). [Publisher/DOI](https://doi.org/10.1103/RevModPhys.65.677)
- R. Shaik, H. R. Varma, M. E.-A. Madjet, F. Zheng, T. Frauenheim, and H. S. Chakraborty, “Plasmonic Resonant Intercluster Coulombic Decay,” *Physical Review Letters* **130**, 233201 (2023). [Publisher/DOI](https://doi.org/10.1103/PhysRevLett.130.233201)
- R. Shaik et al., “Hybridization and coherence in subshell differential intercluster plasmonic decay in Na₂₀@C₂₄₀,” *The Journal of Chemical Physics* **162**, 244305 (2025). [Publisher/DOI](https://doi.org/10.1063/5.0267528)

The references above are selected starting points, not an exhaustive bibliography. Publication metadata and titles were checked against publisher or bibliographic records.
